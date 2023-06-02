import classes from "./AddOns.module.css";
import { useRef } from "react";
import Checkbox from "./Checkbox";

const AddOns = (props) => {
  const btnRef = useRef();

  const checkedClass = `${classes.main} ${classes.checked}`;
  const notCheckedClass = `${classes.main} ${classes["not-checked"]}`;
  const term = props.term === "monthly" ? "mo" : "yr";

  function onClickHandler() {
    btnRef.current.classList.remove("animation-on_click");
    btnRef.current.classList.add("animation-on_click");
    setTimeout(() => {
      props.onClick({
        title: props.title,
        description: props.description,
      });
    }, 150);
  }

  return (
    <>
      <button
        ref={btnRef}
        className={props.isChecked ? checkedClass : notCheckedClass}
        onClick={onClickHandler}>
        <div>
          <Checkbox onClick={props.onClick} isChecked={props.isChecked} />
          <div>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.description}>{props.description}</p>
          </div>
        </div>
        <p className={classes.price}>
          +${props.price}/{term}
        </p>
      </button>
    </>
  );
};
export default AddOns;
