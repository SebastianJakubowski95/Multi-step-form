import classes from "./AfterConfirm.module.css";
import icon from "@/assets/images/icon-thank-you.svg";
import { motion } from "framer-motion";
import React from "react";

const AfterConfirm = () => {
  return (
    <motion.div
      className={classes.main}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: [0.75, 1.05, 1] }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}>
      <div style={{ paddingBottom: "1rem" }}>
        <img src={icon} />
      </div>
      <h1 className="black">Thank you!</h1>
      <p className="grey">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </motion.div>
  );
};

export default AfterConfirm;
