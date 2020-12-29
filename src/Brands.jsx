import React, {Component} from 'react';
import App from "./App";

class Users extends Component {



    render() {
        const {name,surname,age}=this.props;
        return (
            <div>
                <h1> {name} - {surname} - {age}</h1>

            </div>
        );
    }
}

export default Users;