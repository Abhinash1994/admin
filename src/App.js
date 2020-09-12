import React, { Component } from 'react';
import rootRoutes from './components/admin/rootRoutes';
import NoMatch from './components/nomatch';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import PrivateRoute from './components/auth/PrivateRoute';
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					{/* <NotificationContainer /> */}
					<Switch>
						<Route path='/admin' component={rootRoutes} />
						<Route component={NoMatch} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

