import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class WeekEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div class="Week-entry">
        <h4>{this.props.entryName}</h4>
        <span>{this.props.entryLabel}</span>
        <div class="Week-entry-portion">
          <span>Serves</span>
          <Input type="number"></Input>
        </div>
        <Button>Show Recipe</Button>
        <Button>Remove</Button>
      </div>
    );
  }
}

export default WeekEntry;
