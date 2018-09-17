import React from 'react';

class ControlledFormComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            programming: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e){
        e.preventDefault();
        console.log(this.state);
    }

    handleNameChange(e){
        this.setState({name:e.target.value})
    }

    handleCheckBoxChange(e){
        this.setState({programming: e.target.checked})
    }
    render(){
        return (
            <div>
               <form onSubmit={this.submitForm}>
               Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
               Programming ? : <input type="checkbox" value={this.state.programming} onChange={this.handleCheckBoxChange} />
               <button type="submit">Save </button>
               </form>
            </div>
        )
    }
}

export default ControlledFormComp;