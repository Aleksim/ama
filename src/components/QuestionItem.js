import React from 'react';

class QuestionItem extends React.Component{
    

    render () {
        const { id, question } = this.props.question;
        return(
      
          <div class="ui comments">
            <div class="comment">
              <div class="content">
                <a class="author">Anonymous</a>
                <div class="metadata">
                  <span class="date">Today at 5:42PM</span>
                </div>
                <div class="text">
                  {question}
                </div>
                <div class="actions">
                  <a class="reply">Not yet answered</a>
                </div>
              </div>
            </div>
        </div>
        )
    }


}

export default QuestionItem