import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class MealItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: "Monday",
      label: ""
    };

  }

  handleDay(event) {
    this.setState({day: event.target.value});
    alert("Your Meal has been planned for " + event.target.value);

  }

  handleLabel(event) {
    this.setState({label: event.target.value});
  }

  render() {
    return(
      <div class="Planner-item">
        <img class="Planner-item-img" src={this.props.recipe.img}/>
        <span class="Planner-item-name">{this.props.recipe.name}</span>
        <Input value={this.state.label} onChange={this.handleLabel.bind(this)} class="Planner-item-label" placeholder="Label (e.g. Lunch or Snack)"></Input>
        <select value={this.state.day} onChange={this.handleDay.bind(this)} class="Planner-item-day">
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

export default MealItem;
