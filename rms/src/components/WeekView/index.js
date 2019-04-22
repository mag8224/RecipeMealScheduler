import React from 'react';
import WeekEntry from './entry.js';
//import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import WeekPlanner from '../WeekPlanner';
import QuickAdd from '../QuickAdd';

class WeekView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeek: 0,
      weeks: [
        {
          dates: "April 15-21",
          days: {
            "Monday": [{name: "Scrambled Eggs", label: "Breakfast"}, {name: "Chicken Cordon Blue", label: "Dinner"}],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": [],
            "Saturday": [],
            "Sunday": []
          }
        },
        {
          dates: "April 22-28",
          days: {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": [],
            "Saturday": [],
            "Sunday": []
          }
        }
      ],
      selected: {
        key: undefined,
        index: undefined
      }
    };
  }

  render() {
    var empty = true;

    Object.keys(this.state.weeks[this.state.currentWeek].days).forEach(key => {
      if (this.state.weeks[this.state.currentWeek].days[key].length > 0) {
        empty = false;
      }
    });


    var days;
    var planner;

    if (!empty) {
      days = Object.keys(this.state.weeks[this.state.currentWeek].days).map(key => {
        const entries = this.state.weeks[this.state.currentWeek].days[key].map(entry => {
          return (<WeekEntry entryName={entry.name} entryLabel={entry.label}/>);
        });
        return (
          <div class="Week-day">
            <h2>{key}</h2>
            {entries}
          </div>
        );
      });
      planner = <QuickAdd/>;
    }
    else {
      days = <div class="Week-empty">
        <div class="Week-empty-title">This week has not been planned yet</div>
        <div class="Week-empty-instructions">Plan your week below!</div>
      </div>;
      planner = <WeekPlanner/>;
    }

    return (
      <div>
        <div class="Calendar">
          <div class="Calendar-nav">
            <Button onClick={ () => {this.setState({currentWeek: (this.state.currentWeek+1)%2});}}>Previous</Button>
            <span class="Calendar-week">{this.state.weeks[this.state.currentWeek].dates}</span>
            <Button onClick={ () => {this.setState({currentWeek: (this.state.currentWeek+1)%2});}}>Next</Button>
          </div>
          <div class="Week-view">{days}</div>
        </div>
        {planner}
      </div>
    );
  }
}

export default WeekView;
