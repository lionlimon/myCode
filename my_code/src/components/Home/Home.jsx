import React, {Component} from 'react';
import TopList from '../TopList/TopList';
import {Switch, Route} from 'react-router-dom';
import Top from '../Top';
import TopRight from '../TopRight';
import {MyProjects} from '../Projects/MyProjects';
import {OtherProjects} from '../Projects/OtherProjects';
import ProjectForm from './ProjectForm';
import AddUserInProjectForm from './AddUserInProjectForm';
import Project from '../Project/Project';
import DeleteForm from '../DeleteForm';

const topListItems = [
  {url: '/', exact: true, name: 'Мои проекты', id: '1'},
  {url: '/other', name: 'Чужие проекты', id: '2'},
];


class Home extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      miniMenuIsOpen: false
    }

    this.toggleMiniMenu = this.toggleMiniMenu.bind(this);
    this.onDeleteProject = this.onDeleteProject.bind(this);
    this.openEditProjectForm = this.openEditProjectForm.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.editProject = this.editProject.bind(this);
    this.createProject = this.createProject.bind(this);
    this.openCreateProjectForm = this.openCreateProjectForm.bind(this);
    this.openAddUserInProjectForm = this.openAddUserInProjectForm.bind(this);
    this.onRemoveUserInProject = this.onRemoveUserInProject.bind(this);
    this.deleteUserInProject = this.deleteUserInProject.bind(this);
  }

  openCreateProjectForm() {
    this.props.openPopup(
      <ProjectForm 
        closePopup={this.props.closePopup}
        addNotify={this.props.addNotify}
        onSubmit={this.createProject}
      >
        Добавить проект
      </ProjectForm>
    );
  }

  openEditProjectForm(projectId, projectName) {
    this.props.openPopup(
      <ProjectForm 
        closePopup={this.props.closePopup}
        data={{projectId, projectName}}
        addNotify={this.props.addNotify}
        onSubmit={this.editProject}
      >
        Изменить название проекта
      </ProjectForm>
    );
  }

  openAddUserInProjectForm(projectId) {
    this.props.openPopup(
      <AddUserInProjectForm 
        projectId={projectId}
        addUserInProject={this.props.addUserInProject} 
        closePopup={this.props.closePopup}
        addNotify={this.props.addNotify}
      />
    );
  }

  toggleMiniMenu() {

    this.setState({
      miniMenuIsOpen: !this.state.miniMenuIsOpen
    });

  }
  
  createProject(data) {
    this.props.createUserProject(data);
    this.props.closePopup();
  }

  deleteProject(projectId) {
    this.props.deleteUserProject(projectId);
    this.props.closePopup();
  }

  editProject(data) {
    this.props.updateUserProject({
      id: data.id,
      name: data.name
    });
    this.props.closePopup();
  }

  deleteUserInProject(projectId, userId) {
    this.props.deleteUserInProject(userId, projectId)
    this.props.closePopup();
  }

  onDeleteProject(projectId) {
    this.props.openPopup(
      <DeleteForm 
        onClickCancel={this.props.closePopup}
        onClickDelete={() => this.deleteProject(projectId)}
      >
        Вы точно хотите удалить проект?
      </DeleteForm>
    );
  }
  
  onRemoveUserInProject(projectId, userId, event) {
    event.preventDefault();
    this.props.openPopup(
      <DeleteForm 
        onClickCancel={this.props.closePopup}
        onClickDelete={() => {this.deleteUserInProject(projectId, userId)}}
      >
        Вы точно хотите удалить пользователя из проекта?
      </DeleteForm>
      
    );
  }

  render() {
    const miniListClass = this.state.miniMenuIsOpen ? 'mini-list active' : 'mini-list';

    return (
      <div className="content hidden-side">
        <Switch>
          <Route exact path="/">
            <Top>
              <TopList buttonIsVisible={true} auth={this.props.auth} linkGen={'{url}'} menuButtonIsActive={this.state.miniMenuIsOpen} onMenuButtonClick={this.openCreateProjectForm} items={topListItems} />
              <TopRight />
            </Top>

            <MyProjects
              openCreateProjectForm={this.openCreateProjectForm} 
              onDeleteProject={this.onDeleteProject}
              openEditProjectForm={this.openEditProjectForm}
              onRemoveUserInProject={this.onRemoveUserInProject}
              openAddUserInProjectForm={this.openAddUserInProjectForm}
              myProjects={this.props.myProjects}
              getUserProjects={this.props.getUserProjects}
              />
          </Route>
          <Route path="/other">
            <Top>
              <TopList buttonIsVisible={true} auth={this.props.auth} linkGen={'{url}'} menuButtonIsActive={this.state.miniMenuIsOpen} onMenuButtonClick={this.openCreateProjectForm} items={topListItems} />
              <TopRight />
            </Top>
            <OtherProjects 
              onDeleteProject={this.onDeleteProject}
              onRemoveUserInProject={this.onRemoveUserInProject}
              openAddUserInProjectForm={this.openAddUserInProjectForm}
              otherProjects={this.props.otherProjects}
              getOtherProjects={this.props.getOtherProjects}
              />
          </Route>

          <Route path="/project:project_id">
            <Project {...this.props} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Home;