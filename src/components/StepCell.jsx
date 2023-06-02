import classes from "./StepCell.module.css";

const StepCell = (props) => {
  let w = window.innerWidth;
  return (
    <div className={classes.main}>
      <div className={props.isActive ? classes.active : classes["not-active"]}>
        <p>{props.stepNo + 1}</p>
      </div>
      {w >= 768 && (
        <div>
          <h2>STEP {props.stepNo + 1}</h2>
          <h1>{props.stepName}</h1>
        </div>
      )}
    </div>
  );
};
export default StepCell;
