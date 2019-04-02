import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';
import PantryPlanner from './pantry.js';
import RecipePlanner from './recipe.js';
import MealPlanner from './meal.js';
import ShoppingPlanner from './shopping.js';


class WeekPlanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div class="Week-planner">
        <h2>Step 1: What's in your Pantry?</h2>
        <PantryPlanner />
        <h2>Step 2: What do you want to eat this week?</h2>
        <RecipePlanner />
        <h2>Step 3: Organize your meals</h2>
        <MealPlanner />
        <h2>Step 4: When do you want to go shopping?</h2>
        <ShoppingPlanner />
        <Button>Create meal plan</Button>
      </div>
    );
  }
}

export default WeekPlanner;
