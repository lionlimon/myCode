import React from 'react';
import './Card.sass';
import close from '../../../img/close.svg';
import {Scrollbars} from 'react-custom-scrollbars';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

export const Card = (props) => {
  return <div className="card">{props.children}</div>;
}

export const CardClose = (props) => {
  return <img onClick={props.onClick} src={close} alt="" className="card__close" />;
}

export const CardEdit = (props) => {
  return <FontAwesomeIcon className={'card__edit'} icon={faPen} {...props} />;
}

export const Cards = (props) => {
  return (
    <div className="cards">

        {props.children}
  
    </div>
  );
}

export const CardTitle = (props) => {
  return <h3 className="card__title">{props.children}</h3>
}

export const CardSubTitle = (props) => {
  return <h4 className="card__subtitle">{props.children}</h4>
}

export const CardButtons = (props) => {
  return <div className="card__buttons">{props.children}</div>;
}

export const CardForm = (props) => {
  return (
    <form className="card__form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}

export const Members = (props) => {
  

  return (
    <div className="card__members">
      <Scrollbars thumbSize={100} className="scroll-area" style={{ height: '165px' }}>

        <div className="member member_you">
          <a href="#" className="member__img"></a>
          <h5 className="member__name"><a href="#">Вы</a></h5>
        </div>
      
        {props.members && props.members.map((member) => {

          const className = classNames({
            'member': true, 
            'member_blocked': props.blocked
          });

          return (
            <div key={member.id} className={className}>
              <a href="#" className="member__img" onClick={!props.blocked ? (e) => props.onRemoveUserInProject(member.pivot['project_id'], member.pivot['user_id'], e) : () => {}}>{member.name[0]}</a>
              <h5 className="member__name"><a href="#">{member.name}</a></h5>
            </div>
          );
        })}
      </Scrollbars>
    </div>
  );
}