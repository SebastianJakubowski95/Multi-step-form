import classes from "./Step3.module.css";
import React from "react";
import { addOnsData } from "../../../addOnsData.js";
import AddOns from "../../AddOns";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store";

const Step3 = () => {
  const term = useSelector((state) => state.user.term);
  const addOnsArr = useSelector((state) => state.user.addOns);
  const dispatch = useDispatch();

  function onClickHandler(obj) {
    dispatch(userActions.setAddOns(obj));
  }

  const listOfAddOns = addOnsData.map((addOn, index) => (
    <li key={index}>
      <AddOns
        title={addOn.title}
        description={addOn.description}
        term={term}
        price={term === "monthly" ? addOn.price.mo : addOn.price.yr}
        onClick={onClickHandler}
        isChecked={addOnsArr.some((item) => item.title === addOn.title)}
      />
    </li>
  ));

  return <ul className={classes.main}>{listOfAddOns}</ul>;
};

export default Step3;
