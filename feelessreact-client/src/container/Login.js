import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/Login.css';

class Login extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div> 
				<h1> Login Component </h1>
				<Link to="/dashboard"> Dashboard </Link>
				<Link to="/signup"> Sign up </Link>
			</div>
		);
	}
}

export default Login;