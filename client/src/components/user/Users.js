import React, { Component } from "react";
import "./Users.css";

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("/api/users").then(res => res.json()).then(users => {
            this.setState({users});
        });
    }

    render() {
        return(
            <div>
               <ul>
                   {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
               </ul>
               <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Users;