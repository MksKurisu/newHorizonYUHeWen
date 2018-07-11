import axios from 'axios'
import querystring from 'querystring'
import cookie from 'react-cookies'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

const queryLessons = () => axios.get('/v1/lessons')
  .then(response => response.data)
  .catch(error => console.log(error));
  
const queryDetails = params => axios.get('/v1/lessons'+params)
	.then(response => response.data)
  .catch(error => console.log(error));
  
const queryTeachers = () => axios.get('/v1/teachers')
  .then(response => response.data)
  .catch(error => console.log(error));

const queryUser = params => axios.get('/v1/user/'+params)
.then(response => response.data)
.catch(error => console.log(error));

const login = (params) => axios.post('/v1/login',querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
  
const loginUser = () => {
    return cookie.load('userId');
};

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'string';
};

const postCart = (lessonID) => axios.post('/v1/shoppingcart/',{id:lessonID})
	.then(response => response.data)
	  .catch(error => console.log(error));

export { queryLessons, queryDetails, queryTeachers, queryUser, login, loginUser, isLogin, postCart };
