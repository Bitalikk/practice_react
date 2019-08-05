import React from 'react';
import styles from './PrioritySelector.module.css';

const PrioritySelector = ({ options, value, onChange }) => (
  <select
    name="priority"
    value={value}
    onChange={onChange}
    className={styles.prioritySelector}
  >
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default PrioritySelector;
