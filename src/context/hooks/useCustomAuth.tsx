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
	email: string;
}

const useCustomAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
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
		const response: AxiosResponse<authResponse> = await api.post('/login', {
			email,
			password,
		});

		api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

		setUser(response.data.user);
		localStorage.setItem('user', JSON.stringify(response.data.user));
		localStorage.setItem('token', response.data.token);
	};
	const signOut = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		setUser(null);
		history?.push('/');
	};

	return { user, loading, signIn, signOut };
};

export default useCustomAuth;
