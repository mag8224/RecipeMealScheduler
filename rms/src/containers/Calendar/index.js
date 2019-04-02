import React from 'react';
//import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import WeekView from '../../components/WeekView';
import QuickAdd from '../../components/QuickAdd';
import WeekPlanner from '../../components/WeekPlanner';

class Calendar extends React.Component {
    render() {
      return (
        <div >
          <h1>Your Calendar</h1>
          <WeekView/>
          <WeekPlanner/>
        </div>
      );
    }
  }

export default Calendar;
