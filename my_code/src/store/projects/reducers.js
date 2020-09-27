import { 
  PUT_GOTTEN_USER_PROJECTS,
  PUT_GOTTEN_PROJECT_BY_ID,
  PUT_GOTTEN_OTHER_PROJECTS,
  PUT_CREATED_USER_PROJECT,
  PUT_UPDATED_USER_PROJECT,
  PUT_DELETED_USER_PROJECT,
  PUT_ADDED_USER_IN_PROJECT,
  PUT_DELETED_USER_IN_PROJECT,
  PUT_ADDED_COMPONENT_IN_PROJECT,
  PUT_DELETED_COMPONENT_IN_PROJECT,
  PUT_SNIPPETS,
  PUT_CREATED_SNIPPETS,
  PUT_GOTTEN_COMPONENTS,
  PUT_CREATED_COMPONENT
} from './actions';

import store from '../index';

const initialState = {
  myProjects: {},
  otherProjects: {},
  currentProject: {},
  snippetsList: {},
  componentsList: {}
};

// selectors 
function deleteUserById(users, id) {
  return users.filter(user => user.id != id);
}

function getProjectById(projects, id) {
  return projects.filter(projects => projects.id == id);
}

function updateProjectById(projects, id, {name}) {
  return projects.map(project => {
    if (project.id == id) 
      return {...project, name}

    return project; 
  });
}


export const projectsReduser = (state = initialState, action) => {
  switch (action.type) {

    case PUT_GOTTEN_USER_PROJECTS: 
      return ({ 
        ...state,
        myProjects: action.payload
      });

    case PUT_CREATED_USER_PROJECT: 
      return ({
        ...state,
        myProjects: {...state.myProjects, data: [...state.myProjects.data, action.payload]}
      });

    case PUT_UPDATED_USER_PROJECT: 
      return ({
        ...state,
        myProjects: {
          ...state.myProjects, 
          data: [...updateProjectById(state.myProjects.data, action.payload.id, {name: action.payload.name})]}
      });

    case PUT_DELETED_USER_PROJECT: 
      return ({
        ...state,
        myProjects: { 
          ...state.myProjects, 
          data: state.myProjects.data.filter(project => project.id !== action.payload.data.id)
        }
      });

      case PUT_ADDED_USER_IN_PROJECT: 
      let dataWithAddedUser = state.myProjects.data.map(project => {
        
        if (project.id === action.payload.data['project_user']['project_id']) 
          return {...project, users: [...project.users || [], action.payload.data.user]}
        
        return project;
      });
    

      return ({ ...state, myProjects: {...state.myProjects, data: dataWithAddedUser}});
     

    case PUT_DELETED_USER_IN_PROJECT: 
      let dataWithOutAddedUser = state.myProjects.data.map(project => {
        
        if (project.id == action.payload.data['project_id']) {
          return {...project, users: project.users.filter(user => user.id != action.payload.data['user_id'])}
        }
        
        return project;
      });
      return ({...state, myProjects: {...state.myProjects, data: dataWithOutAddedUser}});
      

    case PUT_ADDED_COMPONENT_IN_PROJECT: 
      let updatedCategories;
      
      if (state.currentProject.categories.filter(category => category.id == action.payload.data.category.id).length > 0) {
        updatedCategories = state.currentProject.categories;
      } else {
        updatedCategories = [
          ...state.currentProject.categories, 
          action.payload.data.category
        ];
      }
      let updatedProjectStructure = updatedCategories.map(category => {
        
        return {
          ...category, 
          components: [
            ...state.currentProject.components,
            action.payload.data.component
          ].filter(
            component => category.id == component['category_id']
          )
        }
      });
      
     

      return ({ 
        ...state,
        currentProject: { 
          ...state.currentProject,
          components: [
            ...state.currentProject.components, 
            action.payload.data.component
          ],
          categories: updatedCategories,
          projectStructure: updatedProjectStructure
        }
      });

    case PUT_DELETED_COMPONENT_IN_PROJECT: 
    
      return ({ 
        ...state,
        currentProject: { 
          ...state.currentProject,
          components: state.currentProject.components.filter(
            component => component.id != action.payload.data.id
          ), 
  
          projectStructure: state.currentProject.categories.map(category => {
            return {
              ...category, 
              components: state.currentProject.components.filter(
                component => category.id == component['category_id'] && 
                  component.id != action.payload.data.id
              )
            }
          })
        }
      });
     

    case PUT_GOTTEN_PROJECT_BY_ID: 
      const projectStructure = action.payload.data.categories.map(category => {
        return {
          ...category, 
          components: action.payload.data.components.filter(
            component => category.id == component['category_id']
          )
        }
      });

      return ({ 
        ...state,
        currentProject: { ...action.payload.data, projectStructure}
      });
    
    case PUT_GOTTEN_OTHER_PROJECTS: 
      const filteredProjects = action.payload.data.map(project => {
        return {
          ...project, 
          users: deleteUserById(project.users, action.payload.userId)
        }
      });
    
      return ({ 
        ...state,
        otherProjects: {
          ...action.payload, 
          data: filteredProjects
        }
      });
    
    case PUT_SNIPPETS: 
      return {
        ...state,
        snippetsList: action.payload
      }
      
    case PUT_CREATED_SNIPPETS: 
      return {
        ...state,
        snippetsList: {
          ...state.snippetsList, 
          data: [...state.snippetsList.data, action.payload.data]
        }
      }

    default: return state;  
  }
}