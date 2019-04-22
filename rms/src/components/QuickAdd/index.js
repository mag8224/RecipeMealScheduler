import React from 'react';
import QuickAddItem from './item.js';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class QuickAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {name: "Grilled Cheese", img: ""},
        {name: "Greek Omlette", img: ""},
        {name: "Chicken Curry", img: ""}
      ],
      selected: []
    };

  }

  render() {
    const items = this.state.recipes.map(r =>
      <QuickAddItem recipe={r}/>
    );
    return (
      <div>
        <h2>Quickly Add Suggested Recipes</h2>
        <div class="Planner">
          {items}
        </div>
        <Button>Add selected recipes</Button>
      </div>
    );
  }
}

export default QuickAdd;
