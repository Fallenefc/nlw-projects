import React, { useState, FormEvent } from 'react';
import PageWithBackgroundImg from '../../components/PageWithBackgroundImg';
import Input from '../../components/Input';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const ResetPasswordPage: React.FC = () => {
	const { resetToken } = useParams();
	console.log(resetToken);
	const [email, setEmail] = useState('');
	const [newPassword, setnewPassword] = useState('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		api.post('/resetpassword', {
			email,
			password: newPassword,
			token: resetToken,
		});
	};

	return (
		<PageWithBackgroundImg>
			<form onSubmit={handleSubmit}>
				<Input
					label='email'
					name='email'
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					label='newPassword'
					name='newPassword'
					type='newPassword'
					value={newPassword}
					onChange={(e) => setnewPassword(e.target.value)}
				/>
				<button type='submit'>Enviar</button>
			</form>
		</PageWithBackgroundImg>
	);
};

export default ResetPasswordPage;
