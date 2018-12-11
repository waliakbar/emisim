import React from 'react';

class PatientLogin extends React.Component {
	constructor(props) {
        super(props);
        this.state = { 
			users: [] 
		};
	}

  	componentDidMount() {
		fetch('http://localhost:32667/api/GetAllUsers', { method: 'GET' })
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

		fetch('http://localhost:32667/api/GetUsers', {				
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
			<h2>{item.Id}</h2>
		   <span>{item.Data}, {item.dosage}</span>
		</div>
	));

	return (
		<div>
		<div id="layout-content" className="layout-content-wrapper">
			<h1>Users List</h1>
			<div className="panel-list">{allUsers}</div>			
		</div>

            <div>
                <h3> Login </h3>
                <form onSubmit={this.handleSubmit.bind(this)}> 
                    <div>
                        <label>username</label><br />
                        <input type="text" ref="username" />
                        
                    </div>
                    <div>
                        <label>password</label><br />
                        <input type="password" ref="password" />
                        <br />                     
                    </div> 
                    <input type="submit" value="submit" />                  
                    <br />
                </form>
            </div>
		</div>
	);
}
}


export default PatientLogin;

