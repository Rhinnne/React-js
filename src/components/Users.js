import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';

export default class Users extends Component {
    constructor(){
        super();
        this.state = {
            users:[],
            isloaded: false
        }
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                users: res.data,
                isloaded: true
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render (){
        return(
            <div>
                {!this.state.isloaded ? 
                    <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div> 
                : 
                    <div className='users-container'>
                        {this.state.users && this.state.users.map( user => {
                            return(
                                <div key={user.id}>
                                    <UserInfo info ={user}/>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}