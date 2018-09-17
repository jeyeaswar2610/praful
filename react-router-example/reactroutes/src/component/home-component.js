import React from 'react';

class HomeComp extends React.Component{
    render(){
        return (
            <div>
               First Component: {this.props.children}
            </div>
        )
    }
}

export default HomeComp;