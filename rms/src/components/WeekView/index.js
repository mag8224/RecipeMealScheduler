import React from 'react';
import WeekEntry from './entry.js';
//import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

class WeekView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: {
        "Monday": [{name: "Scrambled Eggs", label: "Breakfast"}, {name: "Chicken Cordon Blue", label: "Dinner"}],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": []
      },
      selected: {
        key: undefined,
        index: undefined
      }
    };

  }

  render() {
    const days = Object.keys(this.state.week).map(key => {
      const entries = this.state.week[key].map(entry => {
        return (<WeekEntry entryName={entry.name} entryLabel={entry.label}/>);
      });
      return (
        <div class="Week-day">
          <h2>{key}</h2>
          {entries}
        </div>
      );
    });

    return (
      <div class="Calendar">
        <div class="Calendar-nav">
          <Button>Previous</Button>
          <span>April 22-28</span>
          <Button>Next</Button>
        </div>
        <div class="Week-view">{days}</div>
      </div>
    );
  }
}

export default WeekView;
