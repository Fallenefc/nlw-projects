import React from 'react';
import './assets/styles/global.css';
import Routes from './pages/Routes';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
	return (
		<>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</>
	);
};

export default App;
