import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



class PantryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count
    }
  }

  render() {
    return (
      <div class="PantryPlanner-item">
        <span class="PantryPanner-item-name">{this.props.itemName}</span>
        <Input type="number" value={this.state.count} class="PantryPanner-item-count"/>
        <span class="PantryPanner-item-units">{this.props.units}</span>
      </div>
    );
  }
}

export default PantryItem;
