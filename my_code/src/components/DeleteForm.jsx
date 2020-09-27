import React from 'react';
import {Card, CardClose, CardButtons, CardTitle} from './UI/Card/Card';
import MiniButton from './UI/MiniButton/MiniButton';

const DeleteForm = (props) => {
  return (
    <Card>
      <CardClose onClick={props.onClickCancel} />
      <CardTitle>{props.children}</CardTitle>
      <CardButtons>
        <MiniButton onClick={props.onClickDelete} red mixinClass="card__mini-button">Удалить</MiniButton>
        <MiniButton mixinClass="card__mini-button" onClick={props.onClickCancel}>Отмена</MiniButton>
      </CardButtons>
    </Card>
  );
};

export default DeleteForm;