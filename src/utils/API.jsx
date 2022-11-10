import axios from 'axios';

axios.defaults.headers.common.Authorization = `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`;

export function getJobList() {
  return axios
    .get(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data`)
    .then(response => response.data)
    .catch(error => error.message);
}
