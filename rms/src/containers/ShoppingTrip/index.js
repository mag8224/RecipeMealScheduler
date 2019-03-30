import React from 'react';
//import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

class Shopping extends React.Component {
    render() {
      return (
        <div >
              <h1>Your Shopping Trip</h1>
          
        </div>
        <div>
             <h2><u>Produce</u></h2>
              <ul>
                  <form action="/action_page.php">
                      <li><input type="checkbox" name="pepper" value="hasPep"> Bell Pepper (3)</input>
                          <input type="text" value="oz, lbs, etc"></input>
                          <Button circular color="red" icon><Icon name="trash"></Icon></Button></li>
                      <li><input type="checkbox" name="Onion" value="hasOn">Spanish Onion (2)</input>
                          <input type="text" value="oz, lbs, etc"></input>
                          <Button circular color="red" icon><Icon name="trash"></Icon></Button></li>
                 </form>
              </ul>          
        </div>
        <Button><div title="Unchecked undeleted items will be added to next shopping trip">Complete Trip</div></Button>
      );
    }
  }

export default Shopping;
