import axios from 'axios'
import querystring from 'querystring'
import cookie from 'react-cookies'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

const queryLessons = () => axios.get('/v1/lessons')
  .then(response => response.data)
  .catch(error => console.log(error));
  
const queryTeachers = () => axios.get('/v1/teachers')
  .then(response => response.data)
  .catch(error => console.log(error));
  
const login = (params) => axios.post('/v1/login',querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
  
const loginUser = () => {
    return cookie.load('userName');
};

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'string';
};

export { queryLessons, queryTeachers, login, loginUser, isLogin };
