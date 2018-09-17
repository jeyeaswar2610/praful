import React from 'react';
import ReactDOM from 'react-dom';

class FormComp extends React.Component{
    constructor(){
        super();
        this.playwithSubmit = this.playwithSubmit.bind(this);
    }
    playwithSubmit(e){
        e.preventDefault();
        console.log(this.input.value);
    }
    render(){
        return (
            <div>
               <form onSubmit={this.playwithSubmit}>
               Name: <input type="text" ref={(input) => this.input = input} />
               <input type="submit" />
               </form>
            </div>
        )
    }
}

export default FormComp;