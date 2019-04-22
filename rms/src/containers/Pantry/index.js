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
      amt: "",
      unit: "",
      category: "Misc",
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
            <Input name="amt" placeholder="Amount" type="number" onChange={this.handleChange}></Input>
            <Input name="unit" placeholder="Unit" onChange={this.handleChange}></Input>
            <Input name="category" placeholder="Category." onChange={this.handleChange} />

            <Button onClick={() =>{ 
              if(this.state.category === "Misc") {
                newI.push(this.state.amt + " " + this.state.unit + " " + this.state.ing);  
              }
              else if( this.state.category === "Dairy") {
                dairy.push(this.state.amt+ " " + this.state.unit + " " + this.state.ing);
        
              }
              else if(this.state.category === "Produce") {
                produce.push(this.state.amt+ " " + this.state.unit + " " + this.state.ing);

              }
              else if(this.state.category === "Frozen Food") {
                frozen.push(this.state.amt+ " " + this.state.unit + " " + this.state.ing);
              }
              else if(this.state.category === "Meat") { 
                meat.push(this.state.amt + " " + this.state.unit + " " + this.state.ing);
              }
              else {
                newI.push(this.state.amt+ " " + this.state.unit + " " + this.state.ing);
              }
              alert("added new item to your pantry");
              this.setState({add:"none", ing: "", amt: "", unit: "", category: "Misc"})}
              
              }>Add Item</Button>
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
                <Table.HeaderCell>Misc</Table.HeaderCell>
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
