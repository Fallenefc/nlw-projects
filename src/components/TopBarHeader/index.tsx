import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './styles.css';

interface TopBarHeaderProps {
	title: string | undefined;
}

const TopBarHeader: React.FC<TopBarHeaderProps> = ({ title }) => {
	return (
		<div className='top-bar-container'>
			<Link to='/'>
				<img src={backIcon} alt='Voltar' />
			</Link>
			<h4>{title}</h4>
			<img src={logoImg} alt='Proffy' />
		</div>
	);
};

export default TopBarHeader;
