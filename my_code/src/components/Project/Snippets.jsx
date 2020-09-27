import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Loader from '../UI/Loader/Loader';


const Snippets = (props) => {
  
  let {componentId, projectId} = useParams();
  let [lastComponentId, setLastComponentId] = useState(componentId);

  useEffect(() => {
  
    if (props.snippets.data === undefined || componentId != lastComponentId) 
      props.getSnippets(componentId);
    
    props.setComponentId(componentId)
    setLastComponentId(componentId);
  }, []);


  return (
    <div>
      {(!props.snippets.data || componentId != lastComponentId) && <Loader />} 
    </div>
  );
};

export default Snippets;