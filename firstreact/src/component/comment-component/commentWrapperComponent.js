import React from 'react';
import NameComp from './nameComponent'
import CommentComp from './commentComponent'
import ActionComp from './actionComponent'

class CommentWrapperComp extends React.Component{
    render(){

        return (
            <div>
              <NameComp commentname={this.props.children}/>
              <CommentComp>{this.props.children}</CommentComp>
              <ActionComp></ActionComp>
            </div>
        )
    }
}

export default CommentWrapperComp;