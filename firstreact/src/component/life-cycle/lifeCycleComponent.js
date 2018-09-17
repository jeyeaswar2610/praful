import React from 'react';

class LifeCycleComp extends React.Component{

    constructor(){
        super();
        this.state={
            status:0
        }
        this.updateState = this.updateState.bind(this);
    }

    componentWillMount(){
        console.log("will be displayed in view")
        //alert("component is not displayed in the view")
    }

    componentDidMount(){
        console.log("com is displayed in the view")
    }
    
    componentWillUpdate(){
        console.log("comp will update in the state now");
    }
    componentDidUpdate(){
        console.log("compo state is updated")
    }


    updateState(){
        this.setState({status: this.state.status+1});
    }

    render(){
        return (
            <div>
               comments: this is abt component life cycle.
               <button onClick={this.updateState}>Change State {this.state.status}</button>
            </div>
        )
    }
}

export default LifeCycleComp;