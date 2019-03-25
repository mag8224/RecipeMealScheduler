import React from 'react';
//import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

class Pantry extends React.Component {
    render() {
      return (
        <div >
          <h1>Currently in Your Pantry</h1>
          <Button>Add Item</Button>
        </div>
      );
    }
  }
  
export default Pantry;
