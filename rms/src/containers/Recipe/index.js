import React from 'react';
//import ReactDOM from 'react-dom';
import RecipeBookPage from '../../components/RecipeBookPage';
import AddRecipe from '../../components/AddRecipe';


class Recipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipeView: "book",
        };
        this.displayRecipe = this.displayRecipe.bind(this);
        this.change = this.change.bind(this);
    }
    displayRecipe(){
        console.log(this.state);
        if(this.state.recipeView === "book"){
            return <RecipeBookPage change={(m) => this.change(m)}></RecipeBookPage>;
        }
        else if (this.state.recipeView === "add"){
            return <AddRecipe></AddRecipe>;
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
