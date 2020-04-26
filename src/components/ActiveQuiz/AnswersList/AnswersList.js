import React from "react";
import classes from './AnswersList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => (
  <ul className={classes.answersList}>
    {props.answers.map((item, idx) => {
      return (
        <AnswerItem
          key={idx}
          state={props.state ? props.state[item.id] : null}
          answer={item}
          onAnswerClick={props.onAnswerClick}
        />
      );
    })}
  </ul>
);

export default AnswersList;
