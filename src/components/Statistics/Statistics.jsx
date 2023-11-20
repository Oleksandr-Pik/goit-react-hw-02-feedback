import React from 'react';
import PropTypes from 'prop-types';

const Statistics = props => {
  return (
    <>
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
    </>
  );
};

Statistics.propTypes = {};

export default Statistics;
