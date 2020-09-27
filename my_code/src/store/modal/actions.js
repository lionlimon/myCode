export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const openPopup = (content) => {
  return {
    type: OPEN_POPUP,
    payload: content
  }
}

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  }
}