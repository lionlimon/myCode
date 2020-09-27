import React from 'react';

import { MiniBlock, MiniBlockTitle, MiniBlockInput, MiniBlockForm } from '../UI/MiniBlock/MiniBlock';
import './Auth.sass';
import SimpleButton from '../UI/SimpleButton/SimpleButton';

import logo from '../../img/logo.png';




export default function Register(props) {

  return (
    <div className="auth-screen">
      
      <div className="auth-screen__logo">
        <img src={logo} alt=""/>
      </div>

      <MiniBlock mixinClass="auth-screen__form">
        <MiniBlockTitle>Регистрация</MiniBlockTitle>
        

        <MiniBlockForm onSubmit={ props.registerOnSubmit }>
          <MiniBlockInput name="name" onChange={ props.handleInputChange } placeholder="Имя" />
          <MiniBlockInput name="email" onChange={ props.handleInputChange } placeholder="Email" />
          <MiniBlockInput name="password" onChange={ props.handleInputChange } type="password" placeholder="Пароль" />
          <MiniBlockInput name="c_password" onChange={ props.handleInputChange } type="password" placeholder="Повторите пароль" />

          <SimpleButton mixinClass="auth-screen__form-button" loading={props.loading} type="submit" className="auth-screen__form-button" width="wide">Зарегистрироваться</SimpleButton>
        </MiniBlockForm>
        
      </MiniBlock>
    </div>

    
  );
}