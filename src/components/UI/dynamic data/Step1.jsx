import classes from "./Step1.module.css";
import Input from "../../Input";
import React from "react";

const Step1 = () => {
  return (
    <div className={classes.main}>
      <Input type="name" header="Name" placeholder="Your name" />
      <Input
        type="email"
        header="Email Address"
        placeholder="email@example.com"
      />
      <Input
        type="phoneNumber"
        header="Phone Number"
        placeholder="e.g. + 1 234 567 890"
      />
    </div>
  );
};

export default Step1;
