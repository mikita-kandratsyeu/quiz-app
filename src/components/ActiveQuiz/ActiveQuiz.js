import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => (
  <div className={classes.activeQuiz}>
    <p className={classes.question}>
      <span>
        <strong>{props.answerNumber}. </strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLenght}</small>
    </p>
    <ul>
      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </ul>
  </div>
);

export default ActiveQuiz;
