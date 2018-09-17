import React from 'react';

class FrndComp extends React.Component{
    render(){
        return (
            <div>
               Third Component: {this.props.children}
            </div>
        )
    }
}

export default FrndComp;