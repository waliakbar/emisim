import React from 'react';
import styles from './PatientLogin.css';


class PatientLogin extends React.Component {
	constructor(props) {
        super(props);
        this.state = { 
			users: [] 
		};
	}

  	componentDidMount() {
		fetch('http://emishub.com:5000/api/GetAllUsers', { method: 'GET' })
		.then(response => response.json())
		.then(data =>
			this.setState({
				users: data,
				isLoading: false
			}))
	   .catch(error => this.setState({ error, isLoading: false }));
	}

	handleSubmit(e)
	{
		if(this.refs.username.value === ''){
				alert('username is required');
				return;
		}

		if(this.refs.password.value === ''){
			alert('password is required');
			return;
		}

		console.log(this.refs.username.value);

		fetch('http://emishub.com:5000/api/GetUsers', {				
			mode: 'cors',
			method: 'POST',
			headers: {
				Accept: 'application/json', 
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.refs.username.value,
				password: this.refs.password.value
			}),
			}).then((response) => response.json())
				.then((responseJson) => 
				{
					console.log("success");
					console.log(responseJson);

					return responseJson.valid
				})
				.catch((error) => {
					console.error(error);
				});
					
		e.preventDefault();
	}

render() {
	const allUsers = this.state.users.map((item, i) => (
		<div>
			<span>{item.UserId}</span>, <span>{item.Username}, {item.Password}</span>
		</div>
	));

	return (
		<div>
        
		<div className="container">
		<form>
		<div class="form-group">
			<label for="exampleInputEmail1">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
			<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
		</div>
		<div class="form-check">
			<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
			<label class="form-check-label" for="exampleCheck1">Check me out</label>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
		</form>

		</div>
			
		<div className="container">
			<div id="layout-content" className="layout-content-wrapper">							
				<div className="panel-list">{allUsers}</div>
			</div>
		</div>

		</div>);
	}

}

export default PatientLogin;

