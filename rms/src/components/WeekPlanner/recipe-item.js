import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class RecipeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  handleButton(event) {
  }

  render() {
    return(
      <div class="RecipePlanner-item">
        <img class="RecipePlanner-item-img" src={this.props.recipe.img}/>
        <span class="RecipePlanner-item-name">{this.props.recipe.name}</span>
        <Button class="RecipePlanner-item-button" onClick={this.handleButton.bind(this)}>Add to Planner</Button>
      </div>
    );
  }
}

export default RecipeItem;
