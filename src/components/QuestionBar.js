import React from 'react';


class QuestionBar extends React.Component{

    state = { question:'' }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onAskSubmit(this.state.question)
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
                <label>Ask me anything</label>
                <input value = {this.state.question} onChange= { (e) => {this.setState({question: e.target.value}) } } />
                <button>Ask</button>
            </form>
        </div>
        )
    }

}



export default QuestionBar