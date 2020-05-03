import axios from 'axios';

export default axios.create({
  baseURL: 'https://quizapp-27ba2.firebaseio.com/',
});
