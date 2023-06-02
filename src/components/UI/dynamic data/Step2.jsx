import classes from "./Step2.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store";
import Card from "../../Card";
import { cardData } from "../../../cardData";
import ToggleBar from "../../ToggleBar";

const Step2 = () => {
  const dispatch = useDispatch();

  const term = useSelector((state) => state.user.term);
  const plan = useSelector((state) => state.user.plan);

  function setPlan(planTitle) {
    dispatch(userActions.setPlan(planTitle));
  }

  function setTerm() {
    let newTerm = "monthly";
    if (term === "monthly") {
      newTerm = "yearly";
    }
    dispatch(userActions.setTerm(newTerm));
  }

  return (
    <div className={classes.main}>
      <ul>
        {cardData.map((card, index) => (
          <li key={index}>
            <Card
              term={term}
              imgSrc={card.img}
              title={card.title}
              price={term === "monthly" ? card.price.mo : card.price.yr}
              isSelected={plan === card.title}
              onClick={setPlan}
            />
          </li>
        ))}
      </ul>
      <ToggleBar term={term} onClick={setTerm} />
    </div>
  );
};

export default Step2;
