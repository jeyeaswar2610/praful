import React from 'react';

class FirstComp extends React.Component{
    render(){
        return (
            <div>
               First Component: {this.props.children}
            </div>
        )
    }
}

export default FirstComp;