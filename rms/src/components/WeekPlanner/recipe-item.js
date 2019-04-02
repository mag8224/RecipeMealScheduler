import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class RecipeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return(
      <div>
        <img src={this.props.recipe.img}/>
        <span>{this.props.recipe.name}</span>
        <Button>Add to Planner</Button>
      </div>
    );
  }
}

export default RecipeItem;
