import React, { useState, FormEvent } from 'react';
import './styles.css';
import logoImg from '../../assets/images/logo.svg';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signIn, signed, loading } = useAuth();
	const history = useHistory();

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		signIn(email, password);
		history.push('/');
		console.log(signed);
	};

	return (
		<div className='login-container'>
			<div className='background-page'>
				<img src={logoImg} alt='logo' className='logo-img' />
				<h2>
					Sua plataforma de <br /> estudos online.
				</h2>
			</div>
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

					<button type='submit'>Entrar</button>
				</form>
			</div>
			{loading ? <span>Loading...</span> : null}
		</div>
	);
};

export default LoginPage;
