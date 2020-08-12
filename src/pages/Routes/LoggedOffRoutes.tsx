import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Register from '../Register';
import RegisterCompleted from '../RegisterCompleted';

const LoggedRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={LoginPage} />
				<Route path='/register' component={Register} />
				<Route path='/registercompleted' component={RegisterCompleted} />
			</Switch>
		</BrowserRouter>
	);
};

export default LoggedRoutes;
