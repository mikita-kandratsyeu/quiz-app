import React from "react";
import classes from './FinishedQuiz.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total += 1;
    }

    return total;
  }, 0)

  return (
    <div className={classes.finishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, idx) => {
          const icon = props.results[quizItem.id] === 'error' ? faTimes : faCheck;
          const cls = classes[`${icon.iconName}`];

          return (
            <li key={idx}>
              <strong>{idx + 1}</strong>.&nbsp;
              {quizItem.question}
              <FontAwesomeIcon icon={icon} className={cls}/>
            </li>
          );
        })}
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Link to='/'>
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
}

export default FinishedQuiz;
