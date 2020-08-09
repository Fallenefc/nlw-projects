import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface TeacherItemProps {
	teacher: {
		id: number;
		subject: string;
		cost: number;
		user_id: number;
		name: string;
		avatar: string;
		whatsapp: string;
		bio: string;
	};
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
	const { subject, cost, name, avatar, whatsapp, bio } = teacher;

	const createNewConnection = () => {
		api.post('/connections', {
			user_id: teacher.id,
		});
	};
	return (
		<article className='teacher-item'>
			<header>
				<img src={avatar} alt={name} />
				<div>
					<strong>{name}</strong>
					<span>{subject}</span>
				</div>
			</header>
			<p>{bio}</p>

			<footer>
				<p>
					Preço/Hora
					<strong>{cost}</strong>
				</p>

				<a
					rel='noopener noreferrer'
					target='_blank'
					onClick={createNewConnection}
					href={`https://wa.me/${whatsapp}`}>
					<img src={whatsappIcon} alt='zap' />
					Entrar em contato
				</a>
			</footer>
		</article>
	);
};

export default TeacherItem;
