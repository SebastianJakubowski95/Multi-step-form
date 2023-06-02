import classes from "./Card.module.css";

const Card = (props) => {
  const selectedClass = `${classes.main} ${classes.selected}`;
  const notSelectedClass = `${classes.main} ${classes["not-selected"]}`;
  let term;

  if (props.term === "monthly") {
    term = "mo";
  } else {
    term = "yr";
  }

  return (
    <>
      <button
        className={props.isSelected ? selectedClass : notSelectedClass}
        onClick={() => props.onClick(props.title)}>
        <img src={props.imgSrc} alt="img" />
        <div>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.price}>
            ${props.price}/{term}
          </p>
          {props.term === "yearly" && (
            <p className={classes.free}>2 months free</p>
          )}
        </div>
      </button>
    </>
  );
};
export default Card;
