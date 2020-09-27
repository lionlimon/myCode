import store from './index';

export default function fetchWithAuth(url, method = 'GET', data = undefined) {
  const USER_TOKEN = store.getState().auth.token;

  return fetch(url, { 
    method: method, 
    body: JSON.stringify(data),
    headers: {      
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${USER_TOKEN}`
    },
  })
    .then(response => response.status === 404 || response.ok ? response.json() : Promise.reject(response))
    .catch((e) => console.error(e));
}