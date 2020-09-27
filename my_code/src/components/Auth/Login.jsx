import React from 'react';

import { MiniBlock, MiniBlockTitle, MiniBlockInput, MiniBlockForm } from '../UI/MiniBlock/MiniBlock';
import './Auth.sass';
import SimpleButton from '../UI/SimpleButton/SimpleButton';

import logo from '../../img/logo.png';

export default function Login(props) {
  return (
    <div className="auth-screen">
      
      <div className="auth-screen__logo">
        <img src={logo} alt=""/>
      </div>

      <MiniBlock mixinClass="auth-screen__form">
        <MiniBlockTitle>Вход</MiniBlockTitle>

        <MiniBlockForm onSubmit={ props.loginOnSubmit }>
          <MiniBlockInput onChange={ props.handleInputChange } name="email" placeholder="Email" />
          <MiniBlockInput onChange={ props.handleInputChange } name="password" placeholder="Пароль" type="password" />

          <SimpleButton mixinClass="auth-screen__form-button" loading={props.loading} type="submit" className="auth-screen__form-button" width="wide">Войти</SimpleButton>
        </MiniBlockForm>
        
      </MiniBlock>
    </div>
  );
}