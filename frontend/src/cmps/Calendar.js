import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
export default class CalendarGuid extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar selectRange
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}