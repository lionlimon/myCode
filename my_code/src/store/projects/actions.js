export const GET_USER_PROJECTS = 'GET_USER_PROJECTS';
export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';
export const GET_OTHER_PROJECTS = 'GET_OTHER_PROJECTS';
export const CREATE_USER_PROJECT = 'CREATE_USER_PROJECT';
export const DELETE_USER_PROJECT = 'DELETE_USER_PROJECT';
export const UPDATE_USER_PROJECT = 'UPDATE_USER_PROJECT';
export const ADD_USER_IN_PROJECT = 'ADD_USER_IN_PROJECT';
export const DELETE_USER_IN_PROJECT = 'DELETE_USER_IN_PROJECT';
export const GET_SNIPPETS = 'GET_SNIPPETS';
export const CREATE_SNIPPETS = 'CREATE_SNIPPETS';
export const UPDATE_SNIPPETS = 'UPDATE_SNIPPETS';
export const GET_COMPONENTS = 'GET_COMPONENTS';
export const CREATE_COMPONENT = 'CREATE_COMPONENT';
export const DELETE_COMPONENT = 'DELETE_COMPONENT';


export const PUT_GOTTEN_USER_PROJECTS = 'PUT_GOTTEN_USER_PROJECTS';
export const PUT_ADDED_COMPONENT_IN_PROJECT = 'PUT_ADDED_COMPONENT_IN_PROJECT';
export const PUT_GOTTEN_PROJECT_BY_ID = 'PUT_GOTTEN_PROJECT_BY_ID';
export const PUT_GOTTEN_OTHER_PROJECTS = 'PUT_GOTTEN_OTHER_PROJECTS';
export const PUT_CREATED_USER_PROJECT = 'PUT_CREATED_USER_PROJECT';
export const PUT_DELETED_USER_PROJECT = 'PUT_DELETED_USER_PROJECT';
export const PUT_UPDATED_USER_PROJECT = 'PUT_UPDATED_USER_PROJECT';
export const PUT_ADDED_USER_IN_PROJECT = 'PUT_ADDED_USER_IN_PROJECT';
export const PUT_DELETED_USER_IN_PROJECT = 'PUT_DELETED_USER_IN_PROJECT';
export const PUT_DELETED_COMPONENT_IN_PROJECT = 'PUT_DELETED_COMPONENT_IN_PROJECT';
export const PUT_SNIPPETS = 'PUT_SNIPPETS';
export const PUT_CREATED_SNIPPETS = 'PUT_CREATED_SNIPPETS';
export const PUT_UPDATED_SNIPPETS = 'PUT_UPDATED_SNIPPETS';
export const PUT_GOTTEN_COMPONENTS = 'PUT_GOTTEN_COMPONENTS';
export const PUT_CREATED_COMPONENT = 'PUT_CREATED_COMPONENT';
export const PUT_DELETED_COMPONENT = 'PUT_DELETED_COMPONENT';
// Requests 

export const getUserProjects = () => {
  return {
    type: GET_USER_PROJECTS,
  }
}

export const getProjectById = ($id) => {
  return {
    type: GET_PROJECT_BY_ID,
    payload: $id,
  }
}

export const getOtherProjects = () => {
  return {
    type: GET_OTHER_PROJECTS,
  }
}

export const createUserProject = (project) => {
  return {
    type: CREATE_USER_PROJECT,
    payload: project
  }
}

export const updateUserProject = (project) => {
  return {
    type: UPDATE_USER_PROJECT,
    payload: project
  }
}

export const deleteUserProject = (projectId) => {
  return {
    type: DELETE_USER_PROJECT,
    payload: projectId
  }
}

export const addUserInProject = (email, project_id) => {
  return {
    type: ADD_USER_IN_PROJECT,
    payload: {email, project_id}
  }
}

export const deleteUserInProject = (userId, projectId) => {
  return {
    type: DELETE_USER_IN_PROJECT,
    payload: {userId, projectId}
  }
}

export const getSnippets = (componentId) => {
  return {
    type: GET_SNIPPETS,
    payload: componentId
  }
}

export const createSnippet = (data) => {
  return {
    type: CREATE_SNIPPETS,
    payload: data
  }
}

export const updateSnippet = (data) => {
  return {
    type: UPDATE_SNIPPETS,
    payload: data
  }
}

export const getComponents = (projectId) => {
  return {
    type: GET_COMPONENTS,
    payload: projectId
  }
}

export const createComponent = (data) => {
  return {
    type: CREATE_COMPONENT,
    payload: data,
  }
}

export const deleteComponent = (componentId) => {
  return {
    type: DELETE_COMPONENT,
    payload: componentId,
  }
}

// Put

export const putAddedComponenInProject = (component) => {
  return { type: PUT_ADDED_COMPONENT_IN_PROJECT, payload: component }
}

export const putDeletedComponenInProject = (component) => {
  return { type: PUT_DELETED_COMPONENT_IN_PROJECT, payload: component }
}

export const putGottenUserProjects = (response) => {
  return { type: PUT_GOTTEN_USER_PROJECTS, payload: response }
}

export const putGottenProjectById = (response) => {
  return { type: PUT_GOTTEN_PROJECT_BY_ID, payload: response }
}

export const putGottenOtherProjects = (response, userId) => {
  return { type: PUT_GOTTEN_OTHER_PROJECTS, payload: {...response, userId} }
}

export const putCreatedUserProject = (response) => {
  return { type: PUT_CREATED_USER_PROJECT, payload: response }
}

export const putDeletedUserProject = (response) => {
  return { type: PUT_DELETED_USER_PROJECT, payload: response }
}

export const putUpdatedUserProject = (response) => {
  return { type: PUT_UPDATED_USER_PROJECT, payload: response }
}

export const putAddedUserInProject = (response) => {
  return { type: PUT_ADDED_USER_IN_PROJECT, payload: response }
}

export const putDeletedUserInProject = (response) => {
  return { type: PUT_DELETED_USER_IN_PROJECT, payload: response }
}

export const putGottenSnippets = (response) => {
  return { type: PUT_SNIPPETS, payload: response }
}

export const putCreatedSnippets = (response) => {
  return { type: PUT_CREATED_SNIPPETS, payload: response }
}

export const putUpdatedSnippet = (response) => {
  return { type: PUT_UPDATED_SNIPPETS, payload: response }
}

export const putGottenComponents = (response) => {
  return { type: PUT_GOTTEN_COMPONENTS, payload: response }
}

export const putCreatedComponent = (response) => {
  return { type: PUT_CREATED_COMPONENT, payload: response }
}

export const putDeletedComponent = (response) => {
  return { type: PUT_DELETED_COMPONENT, payload: response }
}