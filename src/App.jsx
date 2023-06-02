import classes from "./App.module.css";
import { useState } from "react";
import { animate, motion } from "framer-motion";
import { cubicBezier } from "framer-motion";
import DataForm from "./components/UI/DataForm";
import StepMap from "./components/UI/StepMap";
import AfterConfirm from "./components/UI/dynamic data/AfterConfirm";

function App() {
  let w = window.innerWidth;
  const [stepNo, setStepNo] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  function onConfirmHandler() {
    setTimeout(() => {
      setIsConfirmed(true);
    }, 200);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onStepBack() {
    setTimeout(() => {
      setStepNo((prev) => prev - 1);
    }, 200);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onStepNext() {
    setTimeout(() => {
      setStepNo((prev) => prev + 1);
    }, 200);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const animation = {
    large: {
      initial: {
        x: "15%",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      transition: {
        duration: 2,
        delay: 0.5,
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },
    },
    small: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      transition: {
        delay: 0.5,
        duration: 2,
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },
    },
  };

  return (
    <motion.div
      initial={w >= 768 ? animation.large.initial : animation.small.initial}
      animate={w >= 768 ? animation.large.animate : animation.small.animate}
      transition={
        w >= 768 ? animation.large.transition : animation.small.transition
      }
      className={classes.main}>
      <StepMap currentStep={stepNo} />
      {!isConfirmed && (
        <DataForm
          stepNo={stepNo}
          onStepBack={onStepBack}
          onStepNext={onStepNext}
          onConfirm={onConfirmHandler}
          isConfirmed={isConfirmed}
        />
      )}
      {isConfirmed && <AfterConfirm />}
    </motion.div>
  );
}

export default App;
