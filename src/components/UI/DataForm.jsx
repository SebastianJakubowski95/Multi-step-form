import React, { useEffect, useState } from "react";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import classes from "./DataForm.module.css";
import Button from "../Button";
import Step1 from "./dynamic data/Step1";
import Step2 from "./dynamic data/Step2";
import Step3 from "./dynamic data/Step3";
import Step4 from "./dynamic data/Step4";

const DataForm = (props) => {
  let w = window.innerWidth;
  const [swithScreen, setSwithScreen] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const userNameIsValid = useSelector((state) => state.user.name.isValid);
  const userEmailIsValid = useSelector((state) => state.user.email.isValid);
  const userPhoneNumberIsValid = useSelector(
    (state) => state.user.phoneNumber.isValid
  );

  const variants = {
    enter: (swithScreen) => {
      if (props.isConfirmed === true) {
        return;
      } else {
        return {
          zIndex: -1,
          x: swithScreen > 0 ? 700 : -700,
          opacity: 0,
          position: "absolute",
          width: "100%",
        };
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "relative",
      width: "100%",
    },
    exit: (swithScreen) => {
      return {
        zIndex: -1,
        x: swithScreen < 0 ? 700 : -700,
        opacity: 0,
        position: "absolute",
        width: "100%",
      };
    },
  };

  const variantsMobile = {
    enter: (swithScreen) => {
      if (props.isConfirmed === true) {
        return;
      } else {
        return {
          zIndex: -1,
          y: swithScreen > 0 ? 70 : -70,
          opacity: 0,
          position: "absolute",
          width: "100%",
        };
      }
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      position: "relative",
      width: "100%",
    },
    exit: (swithScreen) => {
      return {
        zIndex: -1,
        y: swithScreen > 0 ? 70 : -70,
        opacity: 0,
        position: "absolute",
        width: "100%",
      };
    },
  };

  const stepData = [
    {
      dataForm: <Step1 />,
      title: "Personal info",
      body: "Please provide your name, email address and phone number.",
    },
    {
      dataForm: <Step2 />,
      title: "Select your plan",
      body: "You have the option of monthly or yearly billing.",
    },
    {
      dataForm: <Step3 />,
      title: "Pick add-ons",
      body: "Add-ons help enhance your gaming experience.",
    },
    {
      dataForm: <Step4 />,
      title: "Finishing up",
      body: "Double-check everything looks OK before confirming.",
    },
  ];

  function onStepNext() {
    props.onStepNext();
    setSwithScreen(1);
  }
  function onStepBack() {
    props.onStepBack();
    setSwithScreen(-1);
  }

  useEffect(() => {
    const beTrue = true;
    setFormIsValid(
      beTrue && userNameIsValid && userEmailIsValid && userPhoneNumberIsValid
    );
  }, [userPhoneNumberIsValid, userEmailIsValid, userNameIsValid]);

  return (
    <div className={classes.main}>
      <div>
        <AnimatePresence initial={w < 768 ? true : false} custom={swithScreen}>
          <motion.div
            className={classes["motion-card"]}
            key={props.stepNo}
            variants={w >= 768 ? variants : variantsMobile}
            custom={swithScreen}
            initial={"enter"}
            animate={"center"}
            exit={"exit"}
            transition={
              w > 768
                ? {
                    x: {
                      duration: 1.5,
                      ease: cubicBezier(0.76, 0, 0.24, 1),
                    },
                    opacity: {
                      duration: 0.5,
                      ease: cubicBezier(0.76, 0, 0.24, 1),
                    },
                  }
                : {
                    y: {
                      duration: 1.5,
                      ease: cubicBezier(0.76, 0, 0.24, 1),
                    },
                    opacity: {
                      duration: 1.5,
                      ease: cubicBezier(0.76, 0, 0.24, 1),
                    },
                  }
            }>
            <div className={classes["main-container"]}>
              <div className={classes.info}>
                <h1 className="black">{stepData[props.stepNo].title}</h1>
                <p className="grey">{stepData[props.stepNo].body}</p>
              </div>
              <div className={classes["dynamic-data"]}>
                <div>{stepData[props.stepNo].dataForm}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        style={
          props.stepNo === 0
            ? {
                justifyContent: "center",
              }
            : {}
        }
        className={classes.footer}>
        {props.stepNo !== 0 && (
          <Button type="back" onClick={onStepBack}>
            Go Back
          </Button>
        )}

        {props.stepNo === 0 && !formIsValid && (
          <Button
            type="disabled"
            onClick={() => {
              alert("Form is invalid.");
            }}>
            Next Step
          </Button>
        )}

        {props.stepNo !== 3 && formIsValid && (
          <Button type="next" onClick={onStepNext} formIsValid={formIsValid}>
            Next Step
          </Button>
        )}
        {props.stepNo === 3 && (
          <Button type="confirm" onClick={props.onConfirm}>
            Confirm
          </Button>
        )}
      </div>
    </div>
  );
};

export default DataForm;
