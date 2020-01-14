import React, {Component} from 'react';
import UserService from './services/UserService';

const userService = new UserService();

export default class Home extends Component{
    componentDidMount(){
        userService.getUser()
        .then(response => {
            console.log(response.data);
        })
        .catch(errors => console.log(errors))
    }
    render(){

        return(
            <div>Home</div>
        );
    }
}