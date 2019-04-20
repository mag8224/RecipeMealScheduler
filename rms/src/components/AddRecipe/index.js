import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, TextArea, Button } from 'semantic-ui-react';

import PropTypes from 'prop-types';


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
                measure: "tsp"
            },
            ingredientError: false,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.errorChecker = this.errorChecker.bind(this);
        this.displaySteps = this.displaySteps.bind(this);
        this.displayIngredients = this.displayIngredients.bind(this);
        this.submitRecipe = this.submitRecipe.bind(this);

    }
    submitRecipe() {
        let errors = false;
        let errorMsg = "Please check: \n"
        if (this.state.title === "") {
            errorMsg += "Recipe Title\n";
            errors = true;
        }
        if(this.state.serving == 0) {
            errorMsg += "Serving Size\n";
            errors = true;
        }
        if(this.state.time === "") {
            errorMsg +="Total Time\n";
            errors =true;
        }
        if(this.state.ingredients.length == 0) {
            errorMsg += "Ingredients\n";
            errors = true;
        }
        if (this.state.steps.length == 0) {
            errorMsg += "Steps";
            errors = true;
        }
        
        
        if(!errors) {
            alert("Successfully Saved Recipe");
            let r = {
                name: this.state.title,
                time: this.state.time,
                servings: this.state.serving,
                ingredients: this.state.ingredients,
                directions: this.state.steps,
                notes: this.state.notes,
                category: "Dinner",
            };
            this.props.addRecipe(r);
            this.props.change("book");

        }
        else{
            alert("Recipe can not be saved\n" + errorMsg );
        }
    }
    displaySteps() {
        return this.state.steps.map((i, ind) => <Table.Row><Table.Cell>{ind + 1}.{i}</Table.Cell><Table.Cell><Button circular negative icon="trash"></Button><Button circular primary icon="edit"></Button></Table.Cell></Table.Row>)
    }
    
    displayIngredients() {
        console.log("display ingredients");
        return this.state.ingredients.map(i => <Table.Row><Table.Cell>{i.amt} {i.measure}</Table.Cell><Table.Cell>{i.name}</Table.Cell><Table.Cell><Button circular negative icon="trash"></Button><Button circular primary icon="edit"></Button></Table.Cell></Table.Row>)
    }

    changeHandler(e) {
       // console.log(e.target);
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
            <div>
          <h1 style={{ float: "left"}}>New Recipe</h1>
          <Button style={{float:"right"}} circular icon="arrow left" onClick={() => this.props.change("book")}></Button>

          </div>
            <div>
                <Input disabled style={{float: "clear", width: "100%"}} />
                <Input style={{padding: "10px"}} name="title" label="Title" placeholder="Recipe Title" onChange={this.changeHandler}></Input>
                <Input style={{padding: "10px"}} name="serving" label="Serving Size" type="number" onChange={this.changeHandler}></Input>
                <Input error={this.state.timeError} style={{padding: "10px"}} label="Total Time" name="time" placeholder="HH:MM" onChange={this.changeHandler}></Input>
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
                            <Input placeholder="Ingredient"  onChange={(e) => {
                                    let tmp = this.state.tmpIng;
                                    tmp.name=e.target.value;
                                    this.setState({tmpIng: tmp});
                                }} >
                            <input/>
                            <Input ref="amount" placeholder="Amount" type="number" error={this.state.ingredientError} onChange={(e) => {
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
                                <option value=" "></option>
                                <option value="tsp">tsp</option>
                                <option value="Tbsp">Tbsp</option>
                                <option value="C">C</option>
                                <option value="oz">oz</option>
                                <option value="lbs">lbs</option>
                                <option value="g">grams</option>
                                <option value="kg">kg</option>
                            </select>
                            </Input>
                                
                            
                            <Button onClick={() => {
                                if(this.state.tmpIng.amt == "") {
                                    this.setState({ingredientError: true});
                                } else {
                                let tmpArray = this.state.ingredients;
                                tmpArray.push(this.state.tmpIng);          
                                this.setState({ingredients: tmpArray, tmpIng: {amt: "", measure: "tsp", name: ""}});
                                }
                            }}>Add</Button>
                            </Input>
                            </Table.Cell>
                        </Table.Row>
                        {this.displayIngredients()}
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
                            <Table.Cell><Input style={{width:"100%"}} name="step" placeholder="Add a Step" onChange={this.changeHandler}>
                            <input />
                            <Button onClick={() => {
                                if(this.state.step != "") {
                                let tmpArray = this.state.steps.slice();
                                tmpArray.push(this.state.step);
                                this.setState({steps: tmpArray, step: ""});
                                }
                            }}>Add</Button>
                            </Input> </Table.Cell>
                        </Table.Row>
                        {this.displaySteps()}
                    </Table.Body>
                </Table>
            </div>
            <div style={{marginTop:"15px"}}>
                {/**Additional Notes */}
                <TextArea name="notes" rows={5} style={{width:"70%"}} placeholder="Additional Notes" onChange={this.changeHandler}/>
            </div>
            <Button onClick={this.submitRecipe} positive>Submit</Button>
        </div>
      );
    }
  }
  AddRecipe.propTypes = {
    addRecipe: PropTypes.func,
    change: PropTypes.func,
  }
  
export default AddRecipe;
