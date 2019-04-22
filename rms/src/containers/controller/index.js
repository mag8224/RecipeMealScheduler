import React from 'react';
//import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar';
import MainPage from '../mainpage';
import Recipe from '../Recipe';
import Calendar from '../Calendar';
import Pantry from '../Pantry';
import Grocery from '../Grocery';


class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           s: "overview"
        }
        this.displayPage = this.displayPage.bind(this);
    }
    displayPage() {
        console.log(this.state, "display page");

        if(this.state.s === "calendar"){
            return <Calendar></Calendar>;
        }
        else if(this.state.s === "pantry") {
            return <Pantry></Pantry>;
        }
        else if(this.state.s ==="recipe") {
            console.log("recipe if statement");
            return <Recipe></Recipe>;
        }
        else if(this.state.s === "grocery") {
            return <Grocery></Grocery>
        }
        else {
            return <MainPage></MainPage>;
        }
    }
    render() {
      return (
        <div name="controllerContainer">
            {/* This is the controller container, this holds the logic behind which container is being shown*/}
          <NavBar change={(sc) => this.setState({s: sc})}/>
            {this.displayPage()}
        </div>
      );
    }
  }
  
export default Controller;
