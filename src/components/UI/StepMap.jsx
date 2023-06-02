import React from "react";
import classes from "./StepMap.module.css";
import bgLg from "../../assets/images/bg-sidebar-desktop.svg";
import bgSmall from "../../assets/images/bg-sidebar-mobile 11.svg";
import StepCell from "../StepCell";

const data = [
  {
    stepNo: 0,
    stepName: "YOUR INFO",
  },
  {
    stepNo: 1,
    stepName: "SELECT PLAN",
  },
  {
    stepNo: 2,
    stepName: "ADD-ONS",
  },
  {
    stepNo: 3,
    stepName: "SUMMARY",
  },
];

const StepMap = (props) => {
  let w = window.innerWidth;
  let bg;
  if (w >= 768) {
    bg = bgLg;
  } else {
    bg = bgSmall;
  }

  const listOfSteps = data.map((step, index) => (
    <li key={index}>
      <StepCell
        stepNo={step.stepNo}
        stepName={step.stepName}
        isActive={props.currentStep === step.stepNo}
      />
    </li>
  ));

  return (
    <>
      <div className={classes.main}>
        <img src={bg} alt="background image" className={classes.img} />
        <ul className={classes.steps}>{listOfSteps}</ul>
      </div>
    </>
  );
};

export default StepMap;
