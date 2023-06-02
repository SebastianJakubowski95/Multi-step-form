import classes from "./Input.module.css";
import classNames from "classnames";
import { useInput } from "../hooks/useInput";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store";

const Input = (props) => {
  let validator;
  if (props.type === "email") {
    validator = (value) => value.length > 5 && value.includes("@");
  } else if (props.type === "phoneNumber") {
    validator = (value) =>
      value.length > 8 && value.length < 13 && /^\d+$/.test(value);
  } else {
    validator = (value) => value.length > 1;
  }
  let initialValue;
  if (props.type === "name") {
    initialValue = useSelector((state) => state.user.name.value);
  } else if (props.type === "email") {
    initialValue = useSelector((state) => state.user.email.value);
  } else if (props.type === "phoneNumber") {
    initialValue = useSelector((state) => state.user.phoneNumber.value);
  }

  const {
    value,
    onChangeHandler: onChange,
    isValid,
  } = useInput(initialValue, validator);
  const [isTouched, setIsTouched] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (props.type) {
      case "name":
        dispatch(userActions.setNameValidity(isValid));
        dispatch(userActions.setName(value));
        break;
      case "email":
        dispatch(userActions.setEmailValidity(isValid));
        dispatch(userActions.setEmail(value));
        break;
      case "phoneNumber":
        dispatch(userActions.setPhoneNumberValidity(isValid));
        dispatch(userActions.setPhoneNumber(value));
        break;
    }
  }, [value]);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.header}>
          <h2>{props.header}</h2>
          {!isValid && isTouched && (
            <h2 className="error">This field is required</h2>
          )}
        </div>
        <input
          value={value}
          onChange={onChange}
          type="text"
          className={classNames(
            classes.input,
            !isValid && isTouched && classes["error-border"],
            isValid && classes["valid-border"]
          )}
          placeholder={props.placeholder}
          onFocus={() => setIsTouched(true)}
        />
      </div>
    </>
  );
};
export default Input;
