import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class WeekView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: {
        "Monday": [],
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
    const entries = Object.keys(this.state.week).map((key) =>
      <div>
        <h3>{key}</h3>
        <div>{this.state.week[key]}</div>
      </div>
    );

    return (
      <div>
        <div>
          <Button>Previous</Button>
          <span>March 24-31</span>
          <Button>Next</Button>
        </div>
        <div>{entries}</div>
      </div>
    );
  }
}

export default WeekView;
