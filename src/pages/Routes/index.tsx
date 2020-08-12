import React from 'react';
import { useAuth } from '../../context/AuthContext';
import LoggedOffRoutes from './LoggedOffRoutes';
import LoggedOnRoutes from './LoggedOnRoutes';

// import { Container } from './styles';

const Routes: React.FC = () => {
	const { signed } = useAuth();
	return signed ? <LoggedOnRoutes /> : <LoggedOffRoutes />;
};

export default Routes;
