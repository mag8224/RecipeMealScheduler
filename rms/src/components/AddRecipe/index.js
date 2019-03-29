import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List, Dropdown } from 'semantic-ui-react';


let measurements = [
    {
        key: "oz",
        text: "oz",
        value: "oz"
    },
    {
        key: "C",
        text: "Cups",
        value: "C"
    },
    {
        key: "tsp",
        text: "tsp.",
        value: "tsp"
    },
    {
        key: "Tbsp",
        text: "Tbsp",
        value: "Tbsp"
    },
    {
        key: "lbs",
        text: "lbs",
        value: "lbs"
    },
    {
        key: "g",
        text: "grams",
        value: "g"
    },
    {
        key: "kg",
        text: "kg",
        value: "kg"
    },

];

class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            serving: 0,
            time: "",
            ingredients: [],
            steps: [],
            notes: "",
        }
    }
    render() {
      return (
        <div >
          <h1>New Recipe</h1>
            <div>
                {/* Title, Serving size, Time*/}
                <Input label="Title" placeholder="Recipe Title"></Input>
                <Input label="Serving Size" type="number"></Input>
                <Input label="Time" placeholder="HH:MM"></Input>
            </div>
            <div>
                {/**Ingredients */}
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>Ingredients</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            <Input label="Amt" type="number"/>
                            </Table.Cell>
                            <Table.Cell>
                            <Dropdown
                                placeholder="Measurement"
                                fluid
                                selection
                                options={measurements}
                                />
                            </Table.Cell>
                            <Table.Cell>
                            <Input placeholder="Ingredient" />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                {/**Steps */}
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>Steps</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Input placeholder="Add a Step"></Input></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><List as="ol">
                                <List.Item as="li" value="1">Step directions blah blah blah blah blah</List.Item>
                            </List></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div>
                {/**Additional Notes */}
            </div>
        </div>
      );
    }
  }
  
export default AddRecipe;
