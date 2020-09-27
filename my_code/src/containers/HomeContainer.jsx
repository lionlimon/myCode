import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {openPopup, closePopup} from '../store/modal/actions';
import {addNotify} from '../store/notify/actions';
import {
  getUserProjects, 
  createUserProject, 
  updateUserProject, 
  deleteUserProject, 
  addUserInProject,
  deleteUserInProject,
  getOtherProjects,
  getProjectById,
  getSnippets,
  createSnippet, 
  updateSnippet,
  getComponents, 
  createComponent,
  deleteComponent
} from '../store/projects/actions';


import Home from '../components/Home/Home';


function HomeContainer(props) {

  return (
    <Home {...props}/>
  );
}

const mapStateToProps = (state) => {
  return {
    popupIsOpen: state.modal.popupIsOpen,
    myProjects: state.projects.myProjects,
    otherProjects: state.projects.otherProjects,
    currentProject: state.projects.currentProject,
    auth: state.auth,
    snippets: state.projects.snippetsList
  }
};

const mapDispatchToProps = {
  openPopup,
  closePopup,
  getUserProjects,
  createUserProject,
  updateUserProject,
  addNotify, 
  deleteUserProject,
  addUserInProject,
  deleteUserInProject,
  getOtherProjects,
  getComponents,
  createComponent,
  getProjectById,
  getSnippets,
  createSnippet,
  updateSnippet,
  deleteComponent
};

const HomeContainerWidthRouter = withRouter(HomeContainer);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainerWidthRouter);