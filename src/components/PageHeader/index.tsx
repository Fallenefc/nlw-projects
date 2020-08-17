import React from 'react';
import './styles.css';
import TopBarHeader from '../TopBarHeader';

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
			<TopBarHeader title={pageTitle} />
			<div className='header-content'>
				<strong>{title}</strong>
				{description ? <p>{description}</p> : null}
				{children}
			</div>
		</header>
	);
};

export default PageHeader;
