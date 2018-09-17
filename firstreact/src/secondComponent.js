import React from 'react';
import './index.css';

class SecondComponent extends React.Component{
    render(){
        let colors = {
            color: this.props.fcolor,
            float: "left",
            padding: "5px",
            border: "2px solid blue",
            margin: "2px"
        }
        return (
            <div style={colors}>
                Second Component: Hello from {this.props.location}
            </div>

        )
    }
}

export default SecondComponent;