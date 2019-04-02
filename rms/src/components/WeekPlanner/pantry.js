import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';
import PantryItem from './pantry-item.js';


class PantryPlanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{name: "Milk", count:2, units:"Litres"}],
      form: {
        name: "",
        count: 0,
        units: ""
      }
    };
  }

  handleName(event) {
    this.setState({form:{name: event.target.value}});
  }

  handleCount(event) {
    this.setState({form:{count: event.target.value}});
  }

  handleUnits(event) {
    this.setState({form:{units: event.target.value}});
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <PantryItem count={item.count} itemName={item.name} units={item.units}/>
      );
    });
    return (
      <div class="PantryPlanner">
        <div class="PantryPlanner-form">
          <span>Add item to Pantry</span>
          <div class="PantryPlanner-form-inputs">
            <Input onChange={this.handleName.bind(this)} placeholder="Ingredient Name" value={this.state.form.name}></Input>
            <Input onChange={this.handleCount.bind(this)} type="number" value={this.state.form.count}></Input>
            <Input onChange={this.handleUnits.bind(this)} placeholder="Units" value={this.state.form.units}></Input>
          </div>
          <Button>Add to Pantry</Button>
        </div>
        <div class="PantryPlanner-list">
          {items}
        </div>
      </div>
    );
  }
}

export default PantryPlanner;
