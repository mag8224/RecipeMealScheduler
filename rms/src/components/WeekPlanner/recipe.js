import React from 'react';
import RecipeItem from './recipe-item.js';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class RecipePlanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {name: "Grilled Cheese", img: ""},
        {name: "Greek Omlette", img: ""},
        {name: "Chicken Curry", img: ""},
        {name: "Pepperoni Pizza", img: ""}
      ],
      suggested: [0,1,2]
    };

  }

  render() {
    const items = this.state.recipes.map(r =>
      <RecipeItem recipe={r}/>
    );
    const suggestedItems = this.state.suggested.map(i =>
      <RecipeItem recipe={this.state.recipes[i]}/>
    );
    return (
      <div>
        <h3>Add suggested recipes</h3>
        <div>
          {suggestedItems}
        </div>
        <h3>Or search your recipe book</h3>
        <div>
          <Input placeholder="Search"></Input>
          {items}
        </div>
      </div>
    );
  }
}

export default RecipePlanner;
