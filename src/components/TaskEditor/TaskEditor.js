import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Priority from '../../utilits/Priority';
import styles from './TaskEditor.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    priority: Priority.NORMAL,
  };

  state = {
    text: this.props.text,
    priority: this.props.priority,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({ ...this.state });

    this.reset();
  };

  reset() {
    this.setState({
      text: '',
      priority: Priority.NORMAL,
    });
  }

  render() {
    const { text, priority } = this.state;
    const { onSave, onCancel } = this.props;

    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <input
          className={styles.inputContent}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter task content..."
        />
        <label className={styles.labelSelect}>
          Select task priority:
          <PrioritySelector
            options={options}
            value={priority}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button type="submit" className={styles.btn}>
            Save
          </button>
          <button type="button" className={styles.btn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
