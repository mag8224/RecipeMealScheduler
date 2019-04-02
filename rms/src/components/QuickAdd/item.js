import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class QuickAddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return(<div>
      <img src={this.props.recipe.img}/>
      <span>{this.props.recipe.name}</span>
      <Input placeholder="Label (e.g. Lunch or Snack)"></Input>
      <select>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
      <Input type="checkbox"></Input>
      <label>Add to Planner</label>
    </div>);
  }
}

export default QuickAddItem;
