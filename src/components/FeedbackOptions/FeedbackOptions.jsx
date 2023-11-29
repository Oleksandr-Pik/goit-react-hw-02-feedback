import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsList, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  const handleButtonClick = e => {
    // const { good, neutral, bad } = options;
    const fieldName = e.target.name;
    const fieldValue = options[e.target.name];
    
    console.log('options :>> ', options);
    console.log(fieldName);
    // const option = e.target.name;
    // console.log(Object.keys(options));
    // console.log([e.target.name]: state[e.target.name]+ 1)
    // console.log(this.state[option])
    console.log(fieldValue);
    // console.log(options[e.target.name]: options[e.target.name] + 1)
    
    // this.setState(prevState => ({
    //   [options[e.target.name]]: prevState[fieldValue] + 1 
    // }));

    const bad = options.bad;
    console.log('bad :>> ', bad);
    this.setState(prevState => ({
      bad: prevState.bad + 1 
    }));

  };

  // this.setState((options, props) => ({
  //   [options[e.target.name]]: options[e.target.name] + 1 
  // }));

  // const handleIncrement = () => {};
  // this.setState((state, props) => ({
  //   value: state.value + 1,
  // }));

  return (
    <ButtonsList>
      {Object.keys(options).map(option => (
        <li key={option}>
          <FeedbackButton type="button" name={option} onClick={handleButtonClick}>
            {option}
          </FeedbackButton>
        </li>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
};

export default FeedbackOptions;