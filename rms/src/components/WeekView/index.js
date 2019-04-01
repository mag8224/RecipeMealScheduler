import React from 'react';
import WeekEntry from './entry.js';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class WeekView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: {
        "Monday": [{name: "TestRecipe", label: "TestLabel"}],
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
        <div>
          <h2>{key}</h2>
          {entries}
        </div>
      );
    });

    return (
      <div>
        <div>
          <Button>Previous</Button>
          <span>March 24-31</span>
          <Button>Next</Button>
        </div>
        <div>{days}</div>
      </div>
    );
  }
}

export default WeekView;
