import React from 'react';

class AboutComp extends React.Component{
    render(){
        return (
            <div>
               Second Component: {this.props.children}
            </div>
        )
    }
}

export default AboutComp;