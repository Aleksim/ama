import React from 'react';
import QuestionBar from './QuestionBar';
import uuid from 'uuid';
import QuestionList from './QuestionList';

class App extends React.Component{

    state={
        question:[
        {
            id:uuid.v4(),
            question:'How long have you been coding?',
        },
        {
            id:uuid.v4(),
            question:'Have you ever ridden a barrel on surfboard?',
        },
        {
            id:uuid.v4(),
            question:'What is your dream?',
        }

    ]
}

    onAskSubmit = (ask) =>{

        const newQuestion = {
            id: uuid.v4(),
            question: ask
        }

        this.setState({question: [...this.state.question, newQuestion ]})
    }

render(){
return(
    <div>
        <div className='ui feed'>
            <QuestionList questions = {this.state.question} />
        </div>
        <QuestionBar onAskSubmit={this.onAskSubmit} />
    </div>
);

}
}

export default App