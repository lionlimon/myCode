import React, { Component, Fragment } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CreateComponentForm from './CreateComponentForm';
import Empty from '../Empty/Empty';
import Loader from '../UI/Loader/Loader';
import {matchPath, Switch, Route, NavLink} from 'react-router-dom';
import Snippets from './Snippets';
import Editor from '../Editor/Editor';
import BackLink from '../UI/BackLink/BackLink';
import DeleteForm from '../DeleteForm';
import TopList from '../TopList/TopList';
import Top from '../Top';
import TopRight from '../TopRight';
import CreateSnippetForm from './CreateSnippetForm';


class Project extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarIsOpen: true,
      componentId: undefined,
    }

    this.openCreateComponentForm = this.openCreateComponentForm.bind(this);
    this.openCreateSnippetForm = this.openCreateSnippetForm.bind(this);
    this.onClickSaveButton = this.onClickSaveButton.bind(this);
    this.onComponentDelete = this.onComponentDelete.bind(this);
    this.setComponentId = this.setComponentId.bind(this);

    this.match = matchPath(props.location.pathname, {
      path: '/project:projectId'
    });


  }
  
  componentDidMount() {
    if (this.props.currentProject.data === undefined)
      this.props.getProjectById(this.match.params.projectId);

    if (this.props.components?.componentsList?.data === undefined)
      this.props.getComponents(this.match.params.projectId);
  }

  
  toggleSidebar() {
    this.setState({ sidebarIsOpen: !this.state.sidebarIsOpen });
  }

  onClickSaveButton({data, snippetId}) {
    
    this.props.updateSnippet({data, snippetId});
  }

  onComponentDelete(id) {
    this.props.openPopup(
      <DeleteForm 
        onClickCancel={this.props.closePopup}
        onClickDelete={() => {
          this.props.deleteComponent(id);
          this.props.closePopup();
        }}
      >
        Вы точно хотите удалить компонент из проекта?
      </DeleteForm>  
    );
  }

  openCreateComponentForm() {
    this.props.openPopup(
      <CreateComponentForm 
        closePopup={this.props.closePopup}
        addNotify={this.props.addNotify}
        createComponent={this.props.createComponent}
        projectId={this.match.params.projectId}
      />
    );
    
  }

  openCreateSnippetForm(componentId) {
    this.props.openPopup(
      <CreateSnippetForm 
        closePopup={this.props.closePopup}
        componentId={componentId}
        addNotify={this.props.addNotify}
        createSnippet={this.props.createSnippet}
      />
    );
  }

  setComponentId(id) {
    this.setState({componentId: id});
  }

  render() {
    const contentClass = this.state.sidebarIsOpen ? 'content' : 'content hidden-side';
    return (
      <Fragment>
        <Sidebar 
          onComponentDelete={this.onComponentDelete}
          toggleSidebar={this.toggleSidebar.bind(this)} 
          isOpen={this.state.sidebarIsOpen} 
          currentProject={this.props.currentProject}
          menuItems={this.props.currentProject?.projectStructure} 
          openCreateComponentForm={this.openCreateComponentForm}
          projectId={this.match.params.projectId}
        />
        <div className={contentClass}>
          {/* {this.props.components?.componentsList?.data && <Loader />} */}
          {/* {this.props.components?.componentsList?.data?.length == 0 && 
            <Empty>В этом проекте пока нет компонентов</Empty>} */}

          <BackLink />

          <Top>
            <TopList 
              auth={this.props.auth} 
              linkGen={`/project${this.match.params.projectId || ''}/component{component_id}/snippet{id}`} 
              onMenuButtonClick={() => {this.openCreateSnippetForm(this.state.componentId)}} 
              items={this.props.snippets?.data || []} 
              buttonIsVisible={this.state.componentId}
            />
            <TopRight />
          </Top>

          <Route path="/project:projectId/component:componentId">
            <Snippets setComponentId={this.setComponentId} {...this.props} />
          </Route>

          <Route exact path="/project:projectId/component:componentId/snippet:snippetId">
            <Editor onClickSaveButton={this.onClickSaveButton} {...this.props} />
          </Route>
          
        </div>
      </Fragment>
    );
  }

}


export default Project;