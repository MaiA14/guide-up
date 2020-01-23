import React, { Component } from 'react';
import Calendar from 'react-calendar';
// import {CalendarGuide2} from 'react-css-calendar'
 
export default class CalendarGuide extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className='calendar'>
        <Calendar selectRange
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}