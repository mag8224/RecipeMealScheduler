import React from 'react';
//import ReactDOM from 'react-dom';
import {Input, Table, Divider, Button, Icon } from 'semantic-ui-react';
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
      return (
        <div name="ViewRecipe">
            <h1>{this.state.recipe.name}</h1>
        </div>
      );
    }
  }

  ViewRecipe.propTypes = {
      recipe: PropTypes.object,
      change: PropTypes.func,

  }
  
export default ViewRecipe;
