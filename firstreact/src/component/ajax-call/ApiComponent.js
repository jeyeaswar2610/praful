import React from 'react';
import axios from 'axios';

class ApiComp extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentWillMount() {
        this.callToApiData()
    }

    // displayData(){
    //     return (this.state.users.map((user) => {
    //         console.log(user);
    //         return ( <h2 key={user.id}> {user.name} </h2>)
    //     }))
    //     }

    displayData1() {
        return (this.state.users.map((user) => {
            console.log(user);
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                </tr>

            )
        }))
    }

    callToApiData() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((respose) => {
            console.log(respose.data)
            this.setState({ users: respose.data })
        })
    }

    render() {
        return (
            <div>
                <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>    
                    <tbody>
                        {this.displayData1()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ApiComp;