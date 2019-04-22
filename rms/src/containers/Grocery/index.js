import React from 'react';
import { Checkbox, Table, Button } from 'semantic-ui-react';
//import ReactDOM from 'react-dom';



class Grocery extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          produce: false,
          meat: false,
          dairy: false,

      };
  }
    render() {
      return (
        <div name="groceryContainer">
        <h1>Your Grocery List</h1>
        <Table inverted color="teal">
        <Table.Row>
            <Table.HeaderCell>Produce</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
         <Table.Row>
            <Table.Cell>
         <Checkbox label="2 lbs Strawberries" disabled={this.state.produce} onClick={() => this.setState({produce: true})} />
         </Table.Cell>
         </Table.Row>
         <Table.Row>
         <Table.Cell>
         <Checkbox label="1 lbs Bell Peppers" disabled={this.state.produce} onClick={() => this.setState({produce: true})} />
         </Table.Cell>
         </Table.Row>
         <Table.Row>
         <Table.Cell>
         <Checkbox label="5oz Onion" disabled={this.state.produce} onClick={() => this.setState({produce: true})} />
         </Table.Cell>
         </Table.Row>
        </Table.Row>
        <Table.Row>
            <Table.HeaderCell>Meat</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
            <Table.HeaderCell>Dairy</Table.HeaderCell>
            </Table.Row>
            <Table.Cell>
                <Checkbox label="3 Eggs" disabled={this.state.dairy} onClick={() => {
                    prompt("How much did you buy?");
                    this.setState({dairy: true}); 
                }
                    } />
            </Table.Cell>
            <Table.Row>
            <Table.HeaderCell>Frozen Food</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
            <Table.HeaderCell>Spices</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
            <Table.HeaderCell>Grains/Breads</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
            <Table.HeaderCell>Canned Food</Table.HeaderCell>
            </Table.Row>
         </Table>
         <Button onClick={() => this.setState({produce: true, dairy: true})}>Finish Trip</Button>
        </div>
      );
    }
  }
  
export default Grocery;
