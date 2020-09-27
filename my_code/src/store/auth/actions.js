
export const SEND_REGISTER_DATA = 'SEND_REGISTER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SEND_LOGIN_DATA = 'SEND_LOGIN_DATA';
export const PUT_AUTH_DATA = 'PUT_AUTH_DATA';
export const PUT_USER_DATA = 'PUT_USER_DATA';
export const PUT_FAILED_AUTH_DATA = 'PUT_FAILED_AUTH_DATA';
export const CLEAR_AUTH_DATA = 'CLEAR_AUTH_DATA';




export const sendLoginData = (response) => {
  return {
    type: SEND_LOGIN_DATA,
    payload: response
  };
}

export const sendRegisterData = (response) => {
  return {
    type: SEND_REGISTER_DATA,
    payload: response
  }
}

export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  }
}

export const putAuthData = (response) => {
  
  return {
    type: PUT_AUTH_DATA,
    payload: response
  };
}

export const putFailedAuthData = (response) => {
  return {
    type: PUT_FAILED_AUTH_DATA,
    payload: response
  };
}

export const putUserData = (response) => {
  return {
    type: PUT_USER_DATA,
    payload: response
  }
}

export const clearAuthData = () => {
  return {
    type: CLEAR_AUTH_DATA
  };
}


