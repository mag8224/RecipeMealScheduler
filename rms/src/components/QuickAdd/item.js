import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class QuickAddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return(
      <div class="Planner-item">
        <img class="Planner-item-img" src={this.props.recipe.img}/>
        <span class="Planner-item-name">{this.props.recipe.name}</span>
        <Input class="Planner-item-label" placeholder="Label (e.g. Lunch or Snack)"></Input>
        <select class="Planner-item-day">
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
      </div>
    );
  }
}

export default QuickAddItem;
