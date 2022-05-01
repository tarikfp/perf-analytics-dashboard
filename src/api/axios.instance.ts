import axios from 'axios';

const BASE_URL = 'https://tarikfp-perf-analytics-api.herokuapp.com/';

const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default authAxios;
