import React, {useEffect} from 'react';
import Loader from '../UI/Loader/Loader';
import Projects from './Projects';
import Empty from '../Empty/Empty';
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

export const OtherProjects = (props) => {

  useEffect(() => {
    if (props.otherProjects === undefined || props.otherProjects.success === undefined)
      props.getOtherProjects();    
  })

  if (props.otherProjects !== undefined && props.otherProjects.data !== undefined && props.otherProjects.data.length !== 0) {
    return (
      <Cards>
      {props.otherProjects && props.otherProjects.data.map((project) => {

        return(
          <Card key={project.id}>
            <CardTitle>{project.name}</CardTitle>
            <CardSubTitle>Участники:</CardSubTitle>
            
            <Members blocked members={project.users} />

            <CardButtons>
              <SimpleButton type="link" to={`/project${project.id}`} width="wide" mixinClass="card__button" theme="purple">Открыть</SimpleButton>
            </CardButtons>
          </Card>
        );
      })}
    </Cards>
    );
  } else if (props.otherProjects !== undefined && props.otherProjects.success !== undefined) {
    return <Empty>Вы пока не состоите в других проектах <b>:(</b></Empty>
  } else {
    return <Loader />;
  } 
}

export default OtherProjects;