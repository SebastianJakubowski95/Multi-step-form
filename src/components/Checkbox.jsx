import { useRef } from "react";
import classes from "./Checkbox.module.css";
import classNames from "classnames";
import checkIcon from "../assets/images/icon-checkmark.svg";

const Checkbox = (props) => {
  const inputRef = useRef();

  function checkboxAnimation() {
    inputRef.current.classList.add(`${classes["animation"]}`);
    try {
      setTimeout(() => {
        inputRef.current.classList.remove(`${classes["animation"]}`);
      }, 300);
    } catch {}
  }

  function onClickHandler() {
    checkboxAnimation();
    setTimeout(() => {
      props.onClick();
    }, 300);
  }

  return (
    <div
      ref={inputRef}
      className={classNames(classes.input, props.isChecked && classes.checked)}
      onClick={onClickHandler}>
      {props.isChecked && <img src={checkIcon} alt="check" />}
      <input type="checkbox" style={{ display: "none" }} />
    </div>
  );
};

export default Checkbox;
