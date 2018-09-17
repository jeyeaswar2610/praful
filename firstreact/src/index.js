import React from 'react';
import ReactDOM from 'react-dom';
// import FirstComp from './firstComponent';
// import SecondComponent from './secondComponent';
import CommentWrapperComp from './component/comment-component/commentWrapperComponent';
import LifeCycleComp from './component/life-cycle/lifeCycleComponent'; 
import FormComp from './component/form-component/formComponent'; 
import ControlledFormComp from './component/form-component/controlledFormComponent'; 
import ApiComp from './component/ajax-call/ApiComponent'; 


ReactDOM.render(
                <div>
                <CommentWrapperComp commentname="Jey">Jeys comment</CommentWrapperComp>
                <CommentWrapperComp commentname="Shals">Shals comment</CommentWrapperComp>
                <CommentWrapperComp commentname="Moms">Moms comment</CommentWrapperComp>
                </div>
                , document.getElementById('rootComponent') )

// ReactDOM.render(
// <div>
// <SecondComponent fcolor="blue" location="Chennai"/>
// <SecondComponent fcolor="red" location="Bangalore"/>
// <SecondComponent fcolor="green" location="Pune"/>
// </div>
// , document.getElementById('container')
// )      

ReactDOM.render(
    <div>
    <LifeCycleComp />
      </div>
    , document.getElementById('container')
    )                

    ReactDOM.render(
      <div>
      <FormComp />
        </div>
      , document.getElementById('fcontainer')
      ) 

      ReactDOM.render(
        <div>
        <ControlledFormComp />
          </div>
        , document.getElementById('ccontainer')
        ) 

        ReactDOM.render(
          <div>
          <ApiComp />
            </div>
          , document.getElementById('dcontainer')
          ) 