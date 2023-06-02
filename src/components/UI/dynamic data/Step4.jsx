import classes from "./Step4.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store";
import { cardData } from "../../../cardData";
import { addOnsData } from "../../../addOnsData";
import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { animationsOnClick } from "../../../animations/animationsOnClick";

const Step4 = () => {
  const [sum, setSum] = useState();
  const [scope, animate] = useAnimate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const userTerm = user.term;
  const userPlanName = user.plan;
  const addOnsArr = user.addOns;

  const planObject = cardData.filter((item) => item.title === userPlanName)[0];
  const userTermCapitalized =
    userTerm.charAt(0).toUpperCase() + userTerm.slice(1);

  let planPrice;
  let term;
  let totalName;
  if (userTerm === "monthly") {
    term = "mo";
    planPrice = Number(planObject.price.mo);
    totalName = "month";
  } else {
    term = "yr";
    planPrice = Number(planObject.price.yr);
    totalName = "year";
  }

  useEffect(() => {
    let arrOfAddOnsPrices;
    if (userTerm === "monthly") {
      arrOfAddOnsPrices = addOnsData
        .filter((item) => addOnsArr.some((card) => card.title === item.title))
        .map((item) => item.price.mo);
    } else {
      arrOfAddOnsPrices = addOnsData
        .filter((item) => addOnsArr.some((card) => card.title === item.title))
        .map((item) => item.price.yr);
    }
    let totalAddOns;
    if (addOnsArr.length > 0) {
      totalAddOns = arrOfAddOnsPrices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      setSum(Number(totalAddOns) + Number(planPrice));
    } else {
      setSum(Number(planPrice));
    }
  }, [user]);

  function onChangeTermHandler() {
    if (userTerm === "monthly") {
      dispatch(userActions.setTerm("yearly"));
    } else {
      dispatch(userActions.setTerm("monthly"));
    }
    animate(".changeTermAnimation", ...animationsOnClick("changeTerm"));
  }

  const listOfAddOns = addOnsArr.map((addOn, index) => {
    let addOnPrice;
    const addOnObject = addOnsData.filter(
      (item) => item.title === addOn.title
    )[0];
    if (userTerm === "monthly") {
      addOnPrice = addOnObject.price.mo;
    } else {
      addOnPrice = addOnObject.price.yr;
    }

    return (
      <div key={index} className={classes.addOn}>
        <p className="regular grey">{addOn.title}</p>
        <p className="bold black changeTermAnimation">$+{addOnPrice}</p>
      </div>
    );
  });

  const planObjectTitle = `${planObject.title} `;

  return (
    <div ref={scope} className={classes.main}>
      <div>
        <div>
          <div className={classes["plan-option"]}>
            <p className="bold black">
              {planObjectTitle}
              <span className="changeTermAnimation">
                ({userTermCapitalized})
              </span>
            </p>
            <button onClick={onChangeTermHandler} className="grey regular">
              Change
            </button>
          </div>
          <p
            className="bold black changeTermAnimation"
            style={{ fontSize: "1.1rem" }}>
            ${planPrice}/{term}
          </p>
        </div>
        <ul>{listOfAddOns}</ul>
      </div>
      <div>
        <p className="bold grey">
          Total <span className="changeTermAnimation">(per {totalName})</span>
        </p>
        <p
          className="bold blue changeTermAnimation"
          style={{ fontSize: "calc((20/16)*1rem)" }}>
          ${sum}/{term}
        </p>
      </div>
    </div>
  );
};

export default Step4;
