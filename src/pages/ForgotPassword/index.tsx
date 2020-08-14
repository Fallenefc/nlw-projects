import React, { useState, FormEvent } from 'react';
import Input from '../../components/Input';
import './styles.css';
import PageWithBackgroundImg from '../../components/PageWithBackgroundImg';
import api from '../../services/api';

const ForgotPassword: React.FC = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		api.post('/forgotpassword', { email });
	};

	return (
		<PageWithBackgroundImg button>
			<div className='forgot-password'>
				<div className='form-container'>
					<h2>Parece que você esqueceu sua senha</h2>
					<form onSubmit={handleSubmit}>
						<Input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							label='Email'
							name='Email'
							type='text'
							placeholder='Email'
						/>
						<button type='submit'>Enviar</button>
					</form>
				</div>
			</div>
		</PageWithBackgroundImg>
	);
};

export default ForgotPassword;
