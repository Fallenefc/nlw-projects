import axios from 'axios';
const acesstoken = localStorage.getItem('token');

const api = axios.create({
	baseURL: 'http://localhost:3333',
	headers: {
		Authorization: acesstoken ? acesstoken : '',
	},
});

export default api;
