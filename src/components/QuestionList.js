import React from 'react';
import QuestionItem from './QuestionItem';


class QuestionList extends React.Component{
    render(){
    
        return(
         
                this.props.questions.map((question)=>(
                <QuestionItem key= {question.id} question={question} />)
                )
    
        );
        
    }
}


export default QuestionList