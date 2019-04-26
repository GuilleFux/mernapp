import axios from 'axios';
export default axios.create({
  baseURL: 'https://app-mernapi.herokuapp.com'
  //baseURL: 'http://localhost:5000'
});
