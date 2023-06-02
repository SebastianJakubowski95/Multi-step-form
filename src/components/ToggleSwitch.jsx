import classes from "./ToggleSwitch.module.css";
import classNames from "classnames";

const ToggleSwitch = (props) => {
  return (
    <div onClick={() => props.onClick()} className={classNames(classes.main)}>
      <div
        className={props.term === "monthly" ? classes.left : classes.right}
      />
      <input
        type="checkbox"
        value={props.value}
        name={props.name}
        style={{ display: "none" }}
      />
    </div>
  );
};
export default ToggleSwitch;
