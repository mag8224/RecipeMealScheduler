import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class ShoppingItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count
    }
  }

  render() {
    return (
      <div class="ShoppingPlanner-item">
        <span class="ShoppingPanner-item-destination">{this.props.destination}</span>
          <select class="ShoppingPlanner-item-day" value={this.props.day}>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
      </div>
    );
  }
}

export default ShoppingItem;
