import API from './api';

export {
  login,
  postNewUser
};

function login(username, password) {
  return API.post('/users/signin', {
    username,
    password
  }).then(result => result.data)
  .catch(function(error){
    console.log("error en el catch")
        //TODO When an error status is sent by server (also in the rest of calls!)
  });
}

function postNewUser(username, password, fullname, email, role) {
  return API.post('/users', {
    username,
    password,
    fullname,
    email,
    role }).then(result => result.data);
}
