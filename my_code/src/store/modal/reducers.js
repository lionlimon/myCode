import { OPEN_POPUP, CLOSE_POPUP } from './actions';

const initialState = {
  popupIsOpen: false,
  content: undefined
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP: return ({
      popupIsOpen: true,
      content: action.payload
    });

    case CLOSE_POPUP: return ({
      popupIsOpen: false,
      content: undefined
    });

    default: return state;  
  }
}