import React, { useState, FormEvent } from 'react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { useAuth } from '../../context/AuthContext';
import './styles.css';
import TopBarHeader from '../../components/TopBarHeader';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const MyProfile: React.FC = () => {
	const history = useHistory();
	const { user } = useAuth();
	const [name, setName] = useState(user?.name);
	const [lastname, setLastname] = useState(user?.lastname);
	const [email, setEmail] = useState(user?.email);
	const [whatsapp, setWhatsapp] = useState(user?.whatsapp);
	const [bio, setBio] = useState(user?.bio);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		api.put('/updateuser', { name, lastname, email, whatsapp, bio });
		history.push('/');
	};

	return (
		<div className='profile-container'>
			<TopBarHeader title='Meu perfil' />
			<header className='profile-header'>
				<img src={user?.avatar} alt='avatar-img' />
				<h2>
					{user?.name} {user?.lastname}
				</h2>
			</header>

			<form onSubmit={handleSubmit}>
				<div className='form-header'>
					<h3>Seus dados</h3>
				</div>
				<div className='input-form-block'>
					<div className='name-inputs'>
						<Input
							value={name}
							type='text'
							label='Name'
							name='name'
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							value={lastname}
							type='text'
							label='Sobrenome'
							name='sobrenome'
							onChange={(e) => setLastname(e.target.value)}
						/>
					</div>

					<div className='email-whatsapp-inputs'>
						<Input
							value={whatsapp}
							type='text'
							label='Whatsapp'
							name='whatsapp'
							onChange={(e) => setWhatsapp(e.target.value)}
						/>
						<Input
							value={email}
							type='text'
							label='E-mail'
							name='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<Textarea
						value={bio}
						label='Bio'
						name='bio'
						onChange={(e) => setBio(e.target.value)}
					/>
				</div>
				<button type='submit'>Salvar cadastro</button>
			</form>
		</div>
	);
};

export default MyProfile;
