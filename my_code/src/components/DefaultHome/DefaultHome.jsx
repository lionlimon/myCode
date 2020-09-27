import React from 'react'; 
import { Link } from 'react-router-dom';

import './DefaultHome.sass';

import SimpleButton from '../UI/SimpleButton/SimpleButton';

import logo from '../../img/logo.svg';
import screenshot from '../../img/screenshot.png';

export default function DefaultHome() {
 

  return (
    <div className="home-screen">
      <div className="home-screen__screenshot-wrapper">
        <img className="home-screen__screenshot" src={screenshot} alt="myCode"/>
      </div>

      <div className="home-screen__info">
        
        <div className="home-screen__logo"><img src={logo} alt="myCode"/></div>
        

        <p className="home-screen__text">
          <b>MyCode</b> - удобный сервис для хранения кода компонентов приложений с удобной и простой структурой
        </p>

        <div className="home-screen__buttons">
         
          <Link to="/auth/login"><SimpleButton mixinClass="home-screen__button">Войти</SimpleButton></Link>       
          <Link to="/auth/register"><SimpleButton mixinClass="home-screen__button">Зарегистрироваться</SimpleButton></Link> 
               
        </div>

      </div>
    </div>
  );
 
}
 