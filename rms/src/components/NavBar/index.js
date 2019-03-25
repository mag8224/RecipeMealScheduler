import React from 'react';
//import ReactDOM from 'react-dom';
import {  Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:"overview"
    }
  }

    render() {
      return (
        <div >
            {/*This is the nav bar, so it controls what "tab" is showing that it is selected.
              This will also allow a user to click on the tab they want to go to and the 
              main control container will change to that page (load a container) */}
          <h1>Recipe Meal Scheduler</h1>
          <Menu color="blue" inverted width={"100%"}>
          <Menu.Item active={this.state.tab === "overview"} name="Overview" onClick={() =>{ this.setState({tab:"overview"}); this.props.change("overview"); }}></Menu.Item>
          <Menu.Item active={this.state.tab === "calendar"} name="Calendar" onClick={() => { this.setState({tab:"calendar"}); this.props.change("calendar")}}></Menu.Item>
          <Menu.Item active={this.state.tab === "pantry"} name="Pantry" onClick={() =>{ this.setState({tab:"pantry"}); this.props.change("pantry")}}></Menu.Item>
          <Menu.Item active={this.state.tab === "recipe"} name="Recipe" onClick={() => { this.setState({tab:"recipe"}); this.props.change("recipe")}}></Menu.Item>
          </Menu>
        </div>
      );
    }
  }
  NavBar.propTypes = {
    change: PropTypes.func,

}

export default NavBar;
