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

  }
}

export default WeekView;
