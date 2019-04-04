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
      <div class="Planner-item">
        <img class="Planner-item-img" src={this.props.recipe.img}/>
        <span class="Planner-item-name">{this.props.recipe.name}</span>
        <Button class="Planner-item-button" onClick={this.handleButton.bind(this)}>Add to Planner</Button>
      </div>
    );
  }
}

export default RecipeItem;
