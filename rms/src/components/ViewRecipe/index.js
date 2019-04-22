import React from 'react';
//import ReactDOM from 'react-dom';
import {Input, Table, Divider, Button, Icon, Label } from 'semantic-ui-react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';




class ViewRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.recipe,

        }
    }
    render() {
        let r = this.state.recipe;
      return (
        <div name="ViewRecipe">

            <h1 style={{float: "left"}}>{r.name}</h1>
            <Button circular icon="arrow left" style={{float: "right"}} onClick={() => this.props.change("book")}></Button>
            <Button circular icon="edit" style={{float: "right"}} ></Button>
            <Input disabled style={{float:"clear", width: "100%"}}/>

            <p style={{float: "clear", width: "100%"}}>Time (Hours:Minutes): {r.time} </p>
            <p>Servings: {r.servings}</p>

            <Divider horizontal>Ingredients</Divider>
            <ul>
                {r.ingredients.map(i => <li>{i}<Icon circular color="yellow" name="minus"/></li>)}
                {r.ingredients.map(i => <li>{i}<Icon circular color="green" name="check"/></li>)}
                {r.ingredients.map(i => <li>{i}<Icon circular color="red" name="times"/></li>)}
                
                
            </ul>
            <p>Green Check=in Pantry   Yellow Dash=Some in Pantry    Red X = Not in Pantry</p>            
            <Divider horizontal>Directions</Divider>
            <ol>
                {r.directions.map(s => <li>{s}</li>)}
            </ol>
            <Divider horizontal>Notes</Divider>
            <p>{r.notes}</p>
        </div>
      );
    }
  }

  ViewRecipe.propTypes = {
      recipe: PropTypes.object,
      change: PropTypes.func,

  }
  
export default ViewRecipe;
