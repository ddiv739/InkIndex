import axios from 'axios';

const apiCaller = {
  checkLogin: () => axios.get('/auth/check'),
};

export default apiCaller;
