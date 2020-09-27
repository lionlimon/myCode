import React from 'react';

import {
  Card,
  CardTitle,
  CardSubTitle,
  CardButtons,
  Members,
  Cards, 
  CardClose
} from '../UI/Card/Card';

import SimpleButton from '../UI/SimpleButton/SimpleButton';

const Projects = (props) => {
  return (
    
    <Cards>
      {props.projectsList && props.projectsList.map((project) => {

        return(
          <Card key={project.id}>
            <CardClose onClick={() => {props.onDeleteProject(project.id)}}/>
            <CardTitle>{project.name}</CardTitle>
            <CardSubTitle>Участники:</CardSubTitle>
            
            <Members onRemoveUserInProject={props.onRemoveUserInProject} members={project.users} />

            <CardButtons>
              <SimpleButton width="wide" mixinClass="card__button" theme="purple">Открыть</SimpleButton>
              <SimpleButton width="wide" mixinClass="card__button" theme="mint" onClick={() => {props.openAddUserInProjectForm(project.id)}}>Добавить участника</SimpleButton>
            </CardButtons>
          </Card>
        );
      })}
    </Cards>
  );
}

export default Projects;