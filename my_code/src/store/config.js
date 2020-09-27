
export const CLIENT_SECRET = 'cYVNUdM7xXp9kS8JCGyjFeal5NKC5t6x0me66SWL';
export const CLIENT_ID ="2";

// API

const LOCAL_URL = 'http://mycode';
const URL = 'http://klv-works.online/my-code-server';

const IS_LOCAL_SERVER = true;

let url = IS_LOCAL_SERVER ? LOCAL_URL : URL; 

export const URL_REGISTER_API = `${url}/api/register`;
export const URL_LOGIN_API = `${url}/oauth/token`;
export const URL_USER_API = `${url}/api/user`;
export const URL_PROJECT_API = `${url}/api/projects`;
export const URL_COMPONENT_API = `${url}/api/components`;
export const URL_SNIPPET_API = `${url}/api/snippets`;