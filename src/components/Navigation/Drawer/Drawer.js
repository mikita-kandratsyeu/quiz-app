import React, {Component} from "react";
import classes from './Drawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const link = [
  {title: 'Instagram', link: 'https://www.instagram.com/nick_kondratyev/', icon: faInstagram},
  {title: 'Facebook', link: 'https://www.facebook.com/n1ck.kondratyev', icon: faFacebookSquare},
  {title: 'Linkedin', link: 'https://www.linkedin.com/in/nick-kondratyev/', icon: faLinkedinIn},
];

class Drawer extends Component {
  renderLinks() {
    return link.map((link, idx) => {
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
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
