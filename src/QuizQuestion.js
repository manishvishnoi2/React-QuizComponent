import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} /> */}
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
                );
              }
            )}
          </ul>
        </section>
      </main>
    );
  }

  handleClick(buttonText){
      if(this.props.quiz_question.answer===buttonText){
        this.props.showNextQuestionHandler()
      }
    // this.props.clickHandler(buttonText)
  }
}

export default QuizQuestion;
