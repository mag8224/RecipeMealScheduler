import React from 'react';
//import ReactDOM from 'react-dom';
import RecipeBookPage from '../../components/RecipeBookPage';
import AddRecipe from '../../components/AddRecipe';
import ViewRecipe from '../../components/ViewRecipe';



class Recipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipeView: "book",
            recipes:  [{
              name: "Chicken Cordon Bleu",
              category: "Poultry",
              ingredients: ["Chicken", "Cheese", "Ranch"],
              directions: ["Prep Chicken", "Cook Chicken", "Plate Chicken"],
              servings: 3,
              time: "01:40",
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
              time: "00:20",
              notes: "Good, quick food to eat"
            
            }],
            r: {}
        };
        this.displayRecipe = this.displayRecipe.bind(this);
        this.change = this.change.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
    }
    addRecipe(r) {
        let rec = this.state.recipes;
        rec.push(r);
        this.setState({recipes: rec });
    }
    displayRecipe(){
        console.log(this.state);
        if(this.state.recipeView === "book") {
            return <RecipeBookPage change={(m) => this.change(m)} recipes={this.state.recipes} viewRecipe={(r) => {this.setState({r:r}); this.change("view")}}></RecipeBookPage>;
        }
        else if (this.state.recipeView === "add") {
            return <AddRecipe change={(m) => this.change(m)} addRecipe={(r) => this.addRecipe(r)}></AddRecipe>;
        }
        else if(this.state.recipeView === "view") {
            return <ViewRecipe recipe={this.state.r} change={(m) => this.change(m)} />
        }
        else {
            return <h4>Some other page</h4>;
        }
    }
    change(mode) {
        this.setState({recipeView: mode});

    }
    render() {
      return (
        <div name="RecipeContainer">
          {/*This contains the logic for the type of recipe page being shown (view recipe, edit recipe, new recipe, recipe book)*/}
          {this.displayRecipe()}
        </div>
      );
    }
  }
  
export default Recipe;
