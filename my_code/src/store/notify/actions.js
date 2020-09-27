export const ADD_NOTIFY = 'ADD_NOTIFY';
export const HIDE_NOTIFY = 'HIDE_NOTIFY';

export const addNotify = (notify) => {
  return {
    type: ADD_NOTIFY,
    payload: { ...notify, isVisible: true, id: Math.random()}
  }
}

export const hideNotify = (notifyId) => {
  return {
    type: HIDE_NOTIFY,
    payload: notifyId
  }
}