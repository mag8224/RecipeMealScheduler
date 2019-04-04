import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class ShoppingItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.props.day
    }
  }

  handleChange(event) {
    this.setState({day: event.target.value});
  }

  render() {
    return (
      <div class="Planner-item">
        <span class="Planner-item-destination">{this.props.destination}</span>
          <select class="Planner-item-day" value={this.state.day} onChange={this.handleChange.bind(this)}>
            <option>Monday</option>
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
