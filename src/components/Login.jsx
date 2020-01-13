import React, {Component} from 'react';
import UserService from './services/UserService';

const userService = new UserService();

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const value = event.target.value;
        this.setState({
            [event.target.name]:value,
        });

    }
    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();

        userService.loginUser(this.state)
        .then(response =>{
            localStorage.setItem('token', response.data.token);
            this.props.history.push('/home');
        })
        .catch(error => {
            console.log(error);
            alert('Invalid Credentials')
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Email:</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />


                    <label>Password:</label>
                    <input type='text' name='password' value={this.state.password} onChange={this.handleChange} />

                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    };
}