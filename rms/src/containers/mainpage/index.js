import React from 'react';
//import ReactDOM from 'react-dom';
import { Button, Grid, Table, Popup } from 'semantic-ui-react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dis: false,
    }
  }
    render() {
      return (
        <div >
          <Grid celled> 
            <Grid.Row>
              <Grid.Column width={8}>
              <h4>Calendar</h4>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Mon</Table.HeaderCell>
                    <Table.HeaderCell>Tues</Table.HeaderCell>
                    <Table.HeaderCell>Wed</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                      <h6>Breakfast</h6>
                    </Table.Cell>
                    <Table.Cell>
                      <h6>Breakfast</h6>
                    </Table.Cell>
                  
                    <Table.Cell>
                      <h6>Breakfast</h6>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Scrambled Eggs</Table.Cell>
                    <Table.Cell>Oats</Table.Cell>
                    <Table.Cell>Omelette</Table.Cell>
                    </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <h6>Lunch</h6>
                    </Table.Cell>
                    <Table.Cell>
                      <h6>Lunch</h6>
                    </Table.Cell>
                    <Table.Cell>
                      <h6>Lunch</h6>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell/>
                    <Table.Cell><p id="tues" onClick={() => { let par = document.getElementById("tues"); 
                    par.innerText = "Grilled  Cheese";
                  } }>-</p></Table.Cell>
                    <Table.Cell/>
                    </Table.Row>
                  <Table.Row></Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <h6>Dinner</h6>
                    </Table.Cell>
                    <Table.Cell>
                      <h6>Dinner</h6>
                    </Table.Cell>
                    <Table.Cell>
                      <h6>Dinner</h6>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Chicken Cordon Blue</Table.Cell>
                    <Table.Cell/>
                    <Table.Cell/>
                    </Table.Row>
                  <Table.Row></Table.Row>
                </Table.Body>
              </Table>
              </Grid.Column>
              <Grid.Column width={8}>
              <h4>Groccery List</h4>
              <ul>
                <li>Chicken</li>
                <li>Bread</li>
                <li>Tomatoes</li>
                <li>Bananas</li>
              </ul>
              </Grid.Column>
            </Grid.Row>
            
            <Grid.Row>
              <Grid.Column width={8}>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>
                      Recipes for the Week
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell><Popup trigger={<p>Chicken Cordon Blue</p>} content="Ingredients: Chicken, Ham..."/></Table.Cell>

                  </Table.Row>
                  <Table.Row>
                    <Table.Cell><Popup trigger={<p>Grilled Cheese</p>} content="Ingredients: Cheese, Bread..."/></Table.Cell>
                  </Table.Row>
                  
                  <Table.Row>
                    <Table.Cell><Popup trigger={<p>Scrambled Eggs</p>} content="Ingredients: Eggs, Peppers..."/></Table.Cell>

                  </Table.Row>
                  <Table.Row>
                    <Table.Cell><Popup trigger={<p>Oats</p>} content="Ingredients: Steel Cut Oats, Milk..."/></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              </Grid.Column>
              <Grid.Column width={8}>
              <h4>Pantry</h4>
              
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    }
  }
  
export default MainPage;
