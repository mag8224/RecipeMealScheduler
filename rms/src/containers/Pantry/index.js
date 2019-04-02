import React from 'react';
//import ReactDOM from 'react-dom';
import { Button, Table, Divider, Input } from 'semantic-ui-react';

let produce = ["Strawberries", "Tomatoes", "Potatoes"];
let meat = ["Chicken", "Ground Beef", "Steak"];
let dairy = ["2% Milk", "Butter", "Eggs" ];
let frozen = ["Ice Cream", "Tater Tots"];
let newI = [];


class Pantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: "none",
      ing: "",
    }
    this.displayProduce = this.displayProduce.bind(this);
    this.displayMeat = this.displayMeat.bind(this);
    this.displaydairy = this.displaydairy.bind(this);
    this.displayFrozen = this.displayFrozen.bind(this);
    this.displayNew = this.displayNew.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  displayProduce() {
    return produce.map(p => <Table.Row><Table.Cell>{p}</Table.Cell></Table.Row>)
  }
  
  displayMeat() {
    return meat.map(p => <Table.Row><Table.Cell>{p}</Table.Cell></Table.Row>)
  }
  
  displaydairy() {
    return dairy.map(p => <Table.Row><Table.Cell>{p}</Table.Cell></Table.Row>)
  }
  
  displayFrozen() {
    return frozen.map(p => <Table.Row><Table.Cell>{p}</Table.Cell></Table.Row>)
  }
  displayNew() {
    return newI.map(p => <Table.Row><Table.Cell>{p}</Table.Cell></Table.Row>)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
  })
  }
    render() {

      return (
        <div >
          <h1>Currently in Your Pantry</h1>
          <Button circular positive icon="plus"onClick={() => this.setState({add:true})}></Button>
          <div style={{display:this.state.add}}>
            <Input name="ing" label="Item Name" onChange={this.handleChange}></Input>
            <Button onClick={() =>{ newI.push(this.state.ing); alert("added new item to your pantry"); this.setState({add:"none", ing: ""})}}>Add Item</Button>
          </div>
          <Divider horizontal style={{float:"clear", width: "100%"}}>Pantry</Divider>
          <Table color="teal" inverted style={{float:"left", width: "48%", }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Produce</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.displayProduce()}
            </Table.Body>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Meat</Table.HeaderCell>
    
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.displayMeat()}
            </Table.Body>
          </Table>

          <Table color="teal" inverted style={{float:"right", width: "48%",  }}>
          <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Dairy</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.displaydairy()}
            </Table.Body>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Frozen Food</Table.HeaderCell>
    
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.displayFrozen()}
            </Table.Body> 
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>New Items</Table.HeaderCell>
    
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.displayNew()}
            </Table.Body>
          </Table>
        </div>
      );
    }
  }
  
export default Pantry;
