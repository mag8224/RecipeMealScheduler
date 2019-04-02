import React from 'react';
//import ReactDOM from 'react-dom';
import { Button, Grid, Table, Popup, Tab } from 'semantic-ui-react';

class MainPage extends React.Component {
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
