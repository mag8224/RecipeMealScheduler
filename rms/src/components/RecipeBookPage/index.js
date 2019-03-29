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
  "Bakery",
  "Dessert",
  "Casseroles",
  "Sauces",
  "Pasta",
  "Sandwiches",
  "Drinks",
  "Soups",
  "Dinner",
  "Lunch",
  "Breakfast",
  "Bowls",
  "Holiday",
  "Other",
]
let recipes = [{
  name: "Chicken Cordon Bleu",
  category: "Poultry",
  ingredients: ["Chicken", "Cheese", "Ranch"],
  directions: ["Prep Chicken", "Cook Chicken", "Plate Chicken"],
  servings: 3,
  time: "1:40",
  notes: "10/10 rating",
  
},
{
  name: "Grilled Cheese",
  category: "Sandwiches",
  ingredients: ["Bread", "Cheese", "butter"],
  directions: ["Take 2 slices of bread and butter one side of each slice of bread", 
              "Heat a pan to medium heat", "Put one slice of bread butter side down in the pan",
            "Put the cheese on top of the bread", "Put the last slice of bread butter side up on the cheese",
          "Flip the sandwich over when bottom is golden brown", 
          "Cook until bottom side is also golden brown", "Serve with hot tomato soup"],
  servings: 1,
  time: "0:20",
  notes: "Good, quick food to eat"

}];

class RecipeBookPage extends React.Component {

  constructor(props) {
    super(props);
    this.resultsRecipeTable = this.resultsRecipeTable.bind(this);
    this.allRecipes = this.allRecipes.bind(this);
  }
  resultsRecipeTable() {
    return recipes.map(r => <Table.Row><Table.Cell ><button style={{border:"0px", backgroundColor:"#2185d0", color: "white", textDecoration: "underline" }}>{r.name}</button></Table.Cell>
                      <Table.Cell style={{float:"right"}}><Button icon circular color="blue"><Icon name="edit"></Icon></Button><Button circular color="red" icon><Icon name="trash"></Icon></Button></Table.Cell>

    </Table.Row>);
  }
  allRecipes() {
    let elements = recipeCategories.map((category) => {
    let header = (<Table inverted color="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{category}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>);

    let recipeTable = ( 
      <Table inverted color="blue">
        {recipes.map(r => {
        if (r.category === category) {
          return (
            <Table.Row>
              <Table.Cell>
                <button style={{border:"0px", backgroundColor:"#2185d0", color: "white", textDecoration: "underline" }}>{r.name}</button>
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
              <Table inverted color="violet">
                <Table.Header >
                  <Table.Row >
                    <Table.HeaderCell>Results</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              </Table>
              <Table celled inverted color="blue">
                <Table.Row>
                  {this.resultsRecipeTable()}
                </Table.Row>
              </Table>
              <Divider horizontal>Recipes</Divider>
              <Element style={{
                position: 'relative',
            height: '400px',
            overflow: 'scroll',
            }}>
              {this.allRecipes()}
              </Element>
            </div>
        </div>
      );
    }
  }

  RecipeBookPage.propTypes = {
    change: PropTypes.func,

  }
  
export default RecipeBookPage;
