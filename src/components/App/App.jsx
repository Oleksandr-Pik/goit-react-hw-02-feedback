import React, { Component } from 'react';
import { Container, } from './App.styled';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  handleButtonClick = () => {
    // this.setState
    console.log('this is App')
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleButtonClick}/>
        </Section>
        
        <Section title="Statistics">
        <ul>
          {Object.keys(this.state).map(option => (
            <li key={option}>
              <p>
                {/* {option[0]} : {option[1]} */}
                {[option]} : {this.state[option]}
              </p>
            </li>
          ))}
        </ul>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </Section>
      </Container>
    );
  }
}

export default App;
