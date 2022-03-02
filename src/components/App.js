import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = label => {
    this.setState(prevState => {
      return { [label]: prevState[label] + 1 };
    });
  };

  countTotal = () => {
    const totalFBs = this.state.good + this.state.neutral + this.state.bad;
    return totalFBs;
  };

  countPercentage = () => {
    const totalFBs = (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(0);
    return totalFBs;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positivePers = this.countPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            labels={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePers={positivePers}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
