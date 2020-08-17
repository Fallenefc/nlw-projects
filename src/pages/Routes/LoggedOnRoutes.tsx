import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../Landing';
import TeacherList from '../TeacherList';
import TeacherForm from '../TeacherForm';
import MyProfile from '../MyProfile';

const LoggedOnRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/study' component={TeacherList} />
				<Route path='/give-classes' component={TeacherForm} />
				<Route path='/myprofile' component={MyProfile} />
			</Switch>
		</BrowserRouter>
	);
};

export default LoggedOnRoutes;
