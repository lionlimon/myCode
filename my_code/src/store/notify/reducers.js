import { ADD_NOTIFY, HIDE_NOTIFY } from './actions';

const initialState = {
  notifyList: []
};

export const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFY: return ({
      ...state, 
      notifyList: state.notifyList.concat(action.payload)
    });

    case HIDE_NOTIFY: return({
      ...state, 
      notifyList: state.notifyList.map((item) => {
        if (item.id === action.payload) 
          return { ...item, isVisible: false };
        else 
          return item;
      })
    });

    default: return state;  
  }
}