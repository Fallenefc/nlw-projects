import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { AxiosResponse } from 'axios';

interface authResponse {
	token: string;
	user: User;
}
interface User {
	id: number;
	name: string;
	lastname: string;
	whatsapp: string;
	bio: string;
	avatar: string;
	email: string;
}

const useCustomAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const history = useHistory();

	useEffect(() => {
		const storageUser = localStorage.getItem('user');
		const storageToken = localStorage.getItem('token');

		if (storageUser && storageToken) {
			api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
			setUser(JSON.parse(storageUser));
			setLoading(false);
		}
	}, []);

	const signIn = async (email: string, password: string) => {
		try {
			const response: AxiosResponse<authResponse> = await api.post('/login', {
				email,
				password,
			});

			/*api.interceptors.request.use(
				(config) => {
					config.headers.authorization = `Bearer ${response.data.token}`;
					console.log(config.headers.authorization);
					return config;
				},
				(error) => {
					return Promise.reject(error);
				}
			);*/

			//console.log(api.defaults.headers.authorization);
			setUser(response.data.user);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			localStorage.setItem('token', response.data.token);
			const me = await api.get('/me');
			console.log(me.data);
		} catch (e) {
			setError(!error);
		}
	};
	const signOut = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		setUser(null);
		history?.push('/');
	};

	return { user, loading, signIn, signOut, error };
};

export default useCustomAuth;
