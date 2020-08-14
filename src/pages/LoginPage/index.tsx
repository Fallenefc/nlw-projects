import React, { useState, FormEvent, useEffect } from 'react';
import './styles.css';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PageWithBackgroundImg from '../../components/PageWithBackgroundImg';

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isChecked, setChecked] = useState(false);
	const { signIn } = useAuth();
	const history = useHistory();

	useEffect(() => {
		const storageIsChecked = localStorage.getItem('isChecked');
		console.log(storageIsChecked);
		if (storageIsChecked === 'true') {
			const storageEmail = localStorage.getItem('email');
			const storagePassword = localStorage.getItem('password');

			if (storageEmail && storagePassword && storageIsChecked) {
				setChecked(Boolean(storageIsChecked));
				setEmail(storageEmail);
				setPassword(storagePassword);
			} else {
				setEmail('');
				setPassword('');
			}
		}
	}, []);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (isChecked) {
			console.log('entrei aqui');
			localStorage.setItem('email', email);
			localStorage.setItem('password', password);
			localStorage.setItem('isChecked', JSON.stringify(isChecked));

			console.log(localStorage.getItem('email'));
		} else {
			console.log('está falso');
			localStorage.removeItem('email');
			localStorage.removeItem('password');
			localStorage.removeItem('isChecked');
		}

		signIn(email, password);

		history.push('/');
	};

	return (
		<PageWithBackgroundImg>
			<div className='login-form'>
				<form onSubmit={handleSubmit}>
					<div className='labels'>
						<label htmlFor='login'>Fazer Login</label>
						<Link to='/register'>Criar uma conta</Link>
					</div>
					<div className='input-block'>
						<input
							type='text'
							placeholder='E-mail'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							placeholder='senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='input-checkbox'>
						<label>Lembrar-senha</label>
						<input
							checked={isChecked}
							onChange={(e) => setChecked(e.target.checked)}
							type='checkbox'
							name='lembrar-senha'
							id='lembrar-senha'
						/>
						<Link to='/forgotpassword'>Esqueceu a senha?</Link>
					</div>

					<button type='submit'>Entrar</button>
				</form>
			</div>
		</PageWithBackgroundImg>
	);
};

export default LoginPage;
