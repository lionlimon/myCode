import { 
  PUT_AUTH_DATA, 
  PUT_FAILED_AUTH_DATA, 
  CLEAR_AUTH_DATA, 
  PUT_USER_DATA,
} from './actions';

const initialState = {
  token: '',
  success: false,
  error: '',
  user: {}
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case PUT_AUTH_DATA: return {
      ...state,
      token: action.payload.data ? 
        action.payload.data.token : 
        action.payload.access_token || '',
      success: true,
    }

    case PUT_USER_DATA: return {
      ...state,
      user: action.payload
    }

    case PUT_FAILED_AUTH_DATA: return {
      ...state,
      success: false,
      error: action.payload ? action.payload.message : 'Ошибка отправки формы'
    }

    case CLEAR_AUTH_DATA: return {
      ...state,
      error: '',
    }

    default: return state;  
  }
}