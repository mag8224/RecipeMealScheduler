import React from 'react';
import MealItem from './meal-item.js';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class MealPlanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {name: "Grilled Cheese", img: ""},
        {name: "Greek Omlette", img: ""},
        {name: "Chicken Curry", img: ""},
        {name: "Pepperoni Pizza", img: ""}
      ]
    };

  }

  render() {
    const items = this.state.recipes.map(r =>
      <MealItem recipe={r}/>
    );
    return (
      <div class="">
        <h3>This week's meals</h3>
        <div class="Planner">
          {items}
        </div>
      </div>
    );
  }
}

export default MealPlanner;
