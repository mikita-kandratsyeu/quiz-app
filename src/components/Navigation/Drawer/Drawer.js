import React, {Component} from "react";
import classes from './Drawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebookSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {NavLink} from 'react-router-dom'

const linkSocial = [
  {title: 'Instagram', link: 'https://www.instagram.com/nick_kondratyev/', icon: faInstagram},
  {title: 'Facebook', link: 'https://www.facebook.com/n1ck.kondratyev', icon: faFacebookSquare},
  {title: 'Linkedin', link: 'https://www.linkedin.com/in/nick-kondratyev/', icon: faLinkedinIn},
];

const links = [
  {to: '/', label: 'Список', exact: true},
  {to: '/auth', label: 'Авторизация', exact: false},
  {to: '/quiz-creator', label: 'Создать тест', exact: false},
];

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  }

  renderLinksSocial() {
    return linkSocial.map((link, idx) => {
      return (
        <li
          key={idx}
        >
          <FontAwesomeIcon icon={link.icon} className={classes.icon}/>
          <a href={link.link} target="blank">{link.title}</a>
        </li>
      );
    });
  }

  renderLinks() {
    return links.map((link, idx) => {
      return (
        <li
          key={idx}
        >
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = [
      classes.drawer,
      (!this.props.isOpen) ? classes.close : '',
    ];

    return (
      <React.Fragment>
        <nav
          className={cls.join(' ')}
        >
          <ul>
            {this.renderLinksSocial()}
          </ul>
          <hr/>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
