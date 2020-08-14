import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import sucessCheck from '../../assets/images/icons/success-check-icon.svg';

interface FinishPageProps {
	title: string;
	text: string;
	buttonText: string;
}

const FinishPage: React.FC<FinishPageProps> = ({
	title,
	text,
	buttonText,
	children,
}) => {
	return (
		<div className='finish-container'>
			<div className='text-and-logo'>
				<img src={sucessCheck} alt='logo' />
				<h1>{title}</h1>
				<h4>{text}</h4>
				<Link to='/' className='back-to-login'>
					{buttonText}
				</Link>
			</div>
			{children}
		</div>
	);
};

export default FinishPage;
