import React from 'react';

class CommentComp extends React.Component{
    render(){
        return (
            <div>
               comments: {this.props.children}
            </div>
        )
    }
}

export default CommentComp;