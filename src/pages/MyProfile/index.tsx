import React from 'react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { useAuth } from '../../context/AuthContext';
import './styles.css';
import TopBarHeader from '../../components/TopBarHeader';

const MyProfile: React.FC = () => {
	const { user } = useAuth();

	return (
		<div className='profile-container'>
			<TopBarHeader title='Meu perfil' />
			<header className='profile-header'>
				<img src={user?.avatar} alt='avatar-img' />
				<h2>
					{user?.name} {user?.lastname}
				</h2>
			</header>

			<form>
				<div className='form-header'>
					<h3>Seus dados</h3>
				</div>
				<div className='input-block'>
					<Input type='text' label='Name' name='name' />
					<Input type='text' label='Sobrenome' name='sobrenome' />
					<Input type='text' label='Whatsapp' name='whatsapp' />
					<Input type='text' label='E-mail' name='email' />
					<Textarea label='Bio' name='bio' />
				</div>
				<button type='submit'>Salvar cadastro</button>
			</form>
		</div>
	);
};

export default MyProfile;
