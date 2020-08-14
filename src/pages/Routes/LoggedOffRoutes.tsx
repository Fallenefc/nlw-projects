import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Register from '../Register';
import RegisterCompleted from '../RegisterCompleted';
import ForgotPassword from '../ForgotPassword';
import ResetPasswordPage from '../ResetPasswordPage';
import ResetPasswordCompleted from '../ResetPasswordCompleted';

const LoggedRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={LoginPage} />
				<Route path='/register' component={Register} />
				<Route path='/registercompleted' component={RegisterCompleted} />
				<Route path='/forgotpassword' component={ForgotPassword} />

				<Route
					path='/resetpassword/:resetToken'
					component={ResetPasswordPage}
				/>
				<Route
					path='/resetpasswordcompleted'
					component={ResetPasswordCompleted}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default LoggedRoutes;
