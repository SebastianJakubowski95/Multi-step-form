import classes from "./Button.module.css";
import { motion, cubicBezier } from "framer-motion";

const Button = (props) => {
  const btnClasses = `${classes.btn} ${classes[props.type]}`;
  if (props.formIsValid === true) {
    return (
      <motion.button
        className={btnClasses}
        animate={props.formIsValid && { scale: [1.1, 1] }}
        transition={{
          duration: 1.5,
          ease: cubicBezier(0.45, 0, 0.55, 1),
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => props.onClick()}>
        <p>{props.children}</p>
      </motion.button>
    );
  }

  if (props.type === "confirm") {
    return (
      <motion.button
        className={btnClasses}
        animate={{
          boxShadow: [
            "0px 0px 5px 0px #483EFF",
            "0px 0px 25px 0px #483EFF",
            "0px 0px 5px 0px #483EFF",
          ],
          rotate: [0, 20, -20, 20, -20, 0],
        }}
        transition={{
          boxShadow: {
            duration: 3,
            ease: [
              cubicBezier(0.34, 1.56, 0.64, 1),
              cubicBezier(0.5, 1, 0.89, 1),
              cubicBezier(0.34, 1.56, 0.64, 1),
            ],
            repeat: Infinity,
            repeatDelay: 0.5,
          },
          rotate: {
            delay: 3.5,
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.5,
          },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => props.onClick()}>
        <p>{props.children}</p>
      </motion.button>
    );
  }

  return (
    <motion.button
      className={btnClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => props.onClick()}>
      <p>{props.children}</p>
    </motion.button>
  );
};
export default Button;
