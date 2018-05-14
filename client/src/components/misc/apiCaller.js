import axios from 'axios';

const apiCaller = {
  instagramOAuthCaller: callback => axios.get('/auth/instagram').then(data => callback(data)),
};

export default apiCaller;
