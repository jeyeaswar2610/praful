import React from 'react';

class NameComp extends React.Component{
    render(){
        return (
            <div>
               Name: {this.props.commentname}
            </div>
        )
    }
}

export default NameComp;