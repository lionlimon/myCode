import React, {useEffect} from 'react';
import Loader from '../UI/Loader/Loader';
import {Link} from 'react-router-dom';
import Empty from '../Empty/Empty';
import {
  Card,
  CardTitle,
  CardSubTitle,
  CardButtons,
  Members,
  Cards, 
  CardClose,
  CardEdit
} from '../UI/Card/Card';

import SimpleButton from '../UI/SimpleButton/SimpleButton';

export const MyProjects = (props) => {

  useEffect(() => {
    if (props.myProjects === undefined || props.myProjects.success === undefined)
      props.getUserProjects();    
  })

  if (props.myProjects !== undefined && props.myProjects.data !== undefined && props.myProjects.data.length !== 0) {
    return (
      <Cards>
      {props.myProjects && props.myProjects.data.map((project) => {

        return(
          <Card key={project.id}>
            <CardClose onClick={() => {props.onDeleteProject(project.id)}}/>
            
            <CardTitle>
              {project.name} 
              <CardEdit onClick={() => {props.openEditProjectForm(project.id, project.name)}} />
            </CardTitle>

            <CardSubTitle>Участники:</CardSubTitle>
            
            <Members onRemoveUserInProject={props.onRemoveUserInProject} members={project.users} />

            <CardButtons>
              <SimpleButton type='link' to={`/project${project.id}`} width="wide" mixinClass="card__button" theme="purple">Открыть</SimpleButton>
              <SimpleButton 
                width="wide" 
                mixinClass="card__button" 
                theme="mint" 
                onClick={() => {props.openAddUserInProjectForm(project.id)}}
              >
                Добавить участника
              </SimpleButton>
            </CardButtons>
          </Card>
        );
      })}
    </Cards>
    );
  } else if (props.myProjects !== undefined && props.myProjects.success !== undefined) {
    return <Empty>Вы не создавали проектов <SimpleButton mixinClass="empty-button" onClick={props.openCreateProjectForm}>создать проект</SimpleButton></Empty>
  } else {
    return <Loader />;
  } 
}

export default MyProjects;