import React from 'react';
import PropTypes from "prop-types";
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ addGood, addNeutral, addBad }) => (
        <ul className={styles.buttons}>
            <li><button className={styles.btn} onClick={addGood}>Good</button></li>
            <li><button className={styles.btn} onClick={addNeutral}>Neutral</button></li>
            <li><button className={styles.btn} onClick={addBad}>Bad</button></li>
        </ul>
);

FeedbackOptions.propTypes = {
    addGood: PropTypes.func,
    addNeutral: PropTypes.func,
    addBad: PropTypes.func,
}

export default FeedbackOptions;