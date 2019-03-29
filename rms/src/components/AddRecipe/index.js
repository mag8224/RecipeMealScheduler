import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, List,  TextArea, Button } from 'semantic-ui-react';



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
            timeError: false,
            step: "",
            tmpIng: {
                name: "",
                amt: "",
                measure: ""
            }
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.errorChecker = this.errorChecker.bind(this);
        this.displaySteps = this.displaySteps.bind(this);
        this.displayIngredients = this.displayIngredients.bind(this);

    }
    displaySteps() {

    }
    
    displayIngredients() {
        return this.state.ingredients.map(i => <Table.Row><Table.Cell>{i.name}</Table.Cell><Table.Cell><Button circular secondary icon="trash"></Button><Button circular primary icon="edit"></Button></Table.Cell></Table.Row>)
    }

    changeHandler(e) {
        console.log(e.target);
        if(this.errorChecker(e.target.value, e.target.name) === true) {
            this.setState({
                [e.target.name]:e.target.value
            })
        }
    }
    errorChecker(val, tar) {
        if (tar === "time") {
            if(val.length !== 5){
                this.setState({timeError:true});
                return false;
            }
            else if(!val.includes(":")) {
                this.setState({timeError: true});
                return false;
            } 
            else {
                let b = true;
                for(let i = 0; i<val.length; i++) {
                    console.log(val.charAt(i), isNaN(val.charAt(i)), val.charAt(i) !== ":" )
                    if(isNaN(val.charAt(i)) && val.charAt(i) !== ":")
                    {
                        b = false;
                    }
                }
                if (b === false) {
                    this.setState({timeError: true});
                    return false;
                }
                this.setState({timeError: false});
                return b;

            }

        }
        this.setState({timeError: false});
        return true;
    }

    render() {
      return (
        <div >
          <h1>New Recipe</h1>
            <div >
                
                <Input style={{padding: "10px"}} name="title" label="Title" placeholder="Recipe Title" onChange={this.changeHandler}></Input>
                <Input style={{padding: "10px"}} name="serving" label="Serving Size" type="number" onChange={this.changeHandler}></Input>
                <Input error={this.state.timeError} style={{padding: "10px"}} label="Time" name="time" placeholder="HH:MM" onChange={this.changeHandler}></Input>
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
                            <Input ref="amount" type="number"  onChange={(e) => {
                                let tmp = this.state.tmpIng;
                                tmp.amt=e.target.value;
                                this.setState({tmpIng: tmp});
                            }}> 
                            <input />
                            <select  onChange={(e) => {
                                let tmp = this.state.tmpIng;
                                tmp.measure=e.target.value;
                                this.setState({tmpIng: tmp});
                              }}>
                                <option value="tsp">tsp</option>
                                <option value="Tbsp">Tbsp</option>
                                <option value="C">C</option>
                                <option value="oz">oz</option>
                                <option value="lbs">lbs</option>
                                <option value="g">grams</option>
                                <option value="kg">kg</option>
                            </select>
                            </Input>
                            </Table.Cell>
                          
                            <Table.Cell>
                                
                            <Input placeholder="Ingredient"  onChange={(e) => {
                                    let tmp = this.state.tmpIng;
                                    tmp.name=e.target.value;
                                    this.setState({tmpIng: tmp});
                                }} >
                            <input />
                            <Button onClick={() => {
                                let tmpArray = this.state.ingredients.slice();
                                tmpArray.push(this.state.tmpIng);          
                                this.setState({ingredients: tmpArray, tmpIng: {}});
                            }}>Add</Button>
                            </Input>
                            </Table.Cell>
                        </Table.Row>
                        {this.displayIngredients}
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
                            {/**Add some kind of action here */}
                            <Table.Cell><Input style={{width:"100%"}} name="step" placeholder="Add a Step" onChange={this.changeHandler}>
                            <input />
                            <Button onClick={() => {
                                let tmpArray = this.state.steps.slice();
                                tmpArray.push(this.state.step);
                                this.setState({steps: tmpArray, step: ""});
                                
                            }}>Add</Button>
                            </Input> </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><List as="ol">
                                <List.Item as="li" value="1">Step directions blah blah blah blah blah</List.Item>
                            </List></Table.Cell>
                            <Table.Cell><Button circular negative icon="trash"></Button><Button circular icon="edit" primary color="blue"></Button></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div style={{marginTop:"15px"}}>
                {/**Additional Notes */}
                <TextArea rows={5} style={{width:"70%"}} placeholder="Additional Notes" />
            </div>
            <Button onClick={() =>console.log(this.state)} positive>Submit</Button>
        </div>
      );
    }
  }
  
export default AddRecipe;
