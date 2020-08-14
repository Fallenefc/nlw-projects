import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

interface BackgroundProps {
	button?: boolean;
}

const PageWithBackgroundImg: React.FC<BackgroundProps> = ({
	children,
	button,
}) => {
	return (
		<div className='backgroundcomponent-container'>
			<div className='background-page'>
				<img src={logoImg} alt='logo' className='logo-img' />
				<h2>
					Sua plataforma de <br /> estudos online.
				</h2>
			</div>
			{button ? (
				<Link to='/'>
					<img src={backIcon} alt='back' className='back-img' />
				</Link>
			) : null}
			{children}
		</div>
	);
};

export default PageWithBackgroundImg;
