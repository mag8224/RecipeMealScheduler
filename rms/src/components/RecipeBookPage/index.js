import React from 'react';
//import ReactDOM from 'react-dom';
import {Input, Table, Divider, Button, Icon } from 'semantic-ui-react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';



let recipeCategories = [
  "Poultry",
  "Fish",
  "Tofu",
  "Pork",
  "Red Meat",
  "Appetizers",
  "Dessert",
  "Casseroles",
  "Pasta",
  "Soups",
  "Dinner",
  "Lunch",
  "Breakfast",
  
  "Other",
]

class RecipeBookPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: this.props.recipes,
      recipeView: false,
    }
    this.resultsRecipeTable = this.resultsRecipeTable.bind(this);
    this.allRecipes = this.allRecipes.bind(this);
  }
  resultsRecipeTable() {
    return this.state.recipes.map(r => <Table.Row><Table.Cell ><button style={{border:"0px", backgroundColor:"#14A0A0", color: "white", textDecoration: "underline" }} onClick={() => this.props.viewRecipe(r)}>{r.name}</button></Table.Cell>
                      <Table.Cell style={{float:"right"}}><Button icon circular color="blue"><Icon name="edit"></Icon></Button><Button circular color="red" icon><Icon name="trash"></Icon></Button></Table.Cell>

    </Table.Row>);
  }
  allRecipes() {
    let elements = recipeCategories.map((category) => {
    let header = (<Table inverted color="teal">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{height: "5px", margins: "5px", padding: "5px"}}>{category}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>);

    let recipeTable = ( 
      <Table inverted color="teal"  >
        {this.state.recipes.map(r => {
        if (r.category === category) {
          return (
            <Table.Row>
              <Table.Cell>
                <button style={{border:"0px", backgroundColor:"#14A0A0", color: "white" }} onClick={() => this.props.viewRecipe(r)}>{r.name}</button>
              </Table.Cell>
              <Table.Cell style={{float:"right"}}>
              <Button icon circular color="blue"><Icon name="edit"></Icon></Button><Button circular color="red" icon><Icon name="trash"></Icon></Button>
              </Table.Cell>
            </Table.Row>
          )
        }
        
      })}
      </Table>)
      return [header, recipeTable];
    });

    return elements;
    
  }
    render() {
      return (
        <div name="RecipeBookPage">
            <h2 style={{float:"left"}}>Your Recipe Book</h2>
            <Button positive style={{float:"right"}} onClick={() => this.props.change("add")}>Add Recipe</Button>
            <div>
              <Input style={{float: "clear", width:"100%"}} placeholder="Search by (Ingredient, Title, Category)..."  />
              <Table inverted color="teal">
                <Table.Header >
                  <Table.Row >
                    <Table.HeaderCell>Results</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              </Table>
              <Table celled inverted color="teal">
                <Table.Row>
                  {this.resultsRecipeTable()}
                </Table.Row>
              </Table>
              <Divider horizontal onClick={ () => this.setState({recipeView:true})}>Recipes</Divider>
              <Element style={{
                position: 'relative',
            height: '400px',
            overflow: 'scroll',
            }}>
              {this.state.recipeView ? this.allRecipes() : ""}
              </Element>
            </div>
        </div>
      );
    }
  }

  RecipeBookPage.propTypes = {
    change: PropTypes.func,
    recipes: PropTypes.array,
    viewRecipe: PropTypes.func,
  }
  
export default RecipeBookPage;
