import React from 'react';
//import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import WeekView from '../../components/WeekView';

class Calendar extends React.Component {
    render() {
      return (
        <div>
          <h1>Your Calendar</h1>
          <WeekView/>
        </div>
      );
    }
  }

export default Calendar;
