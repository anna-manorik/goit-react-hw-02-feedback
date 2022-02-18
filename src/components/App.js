import React, {Component} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }

  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }

  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }

  countTotal = () => {
    const totalFBs = this.state.good + this.state.neutral + this.state.bad;
    return totalFBs;
  }

  countPercentage = () => {
    const totalFBs = (this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed(0);
    return totalFBs;
  }


  render(){
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positivePers = this.countPercentage();

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          addGood={this.addGood}
          addNeutral={this.addNeutral}
          addBad={this.addBad}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? 
          <Statistics 
            good={good}
            neutral={neutral} 
            bad={bad}
            total={total} 
            positivePers={positivePers}
          /> :
          <Notification
            message="There is no feedback" 
          />
        }
      </Section>
      </>
    );
  }
};

export default App;
