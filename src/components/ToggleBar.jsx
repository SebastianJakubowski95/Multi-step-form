import classes from "./ToggleBar.module.css";
import ToggleSwitch from "./ToggleSwitch";

const ToggleBar = (props) => {
  return (
    <>
      <div className={classes.main}>
        <div>
          <p
            className={
              props.term === "monthly" ? classes.active : classes["not-active"]
            }>
            Monthly
          </p>
          <ToggleSwitch term={props.term} onClick={props.onClick} />
          <p
            className={
              props.term === "yearly" ? classes.active : classes["not-active"]
            }>
            Yearly
          </p>
        </div>
      </div>
    </>
  );
};
export default ToggleBar;
