import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './styles.css';

type Props = {
	title: string;
	description?: string;
	pageTitle?: string;
};

const PageHeader: React.FC<Props> = ({
	title,
	children,
	description,
	pageTitle,
}) => {
	return (
		<header className='page-header'>
			<div className='top-bar-container'>
				<Link to='/'>
					<img src={backIcon} alt='Voltar' />
				</Link>
				<h4>{pageTitle}</h4>
				<img src={logoImg} alt='Proffy' />
			</div>

			<div className='header-content'>
				<strong>{title}</strong>
				{description ? <p>{description}</p> : null}
				{children}
			</div>
		</header>
	);
};

export default PageHeader;
