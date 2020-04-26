import React from "react";
import classes from './MenuToggle.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const MenuToggle = (props) => {
  const icon = (props.isOpen) ? faTimes : faBars;
  const cls = [classes.menuToggle, (props.isOpen) ? classes.open : ''];

  return (
    <FontAwesomeIcon
      icon={icon}
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  );
}

export default MenuToggle;
