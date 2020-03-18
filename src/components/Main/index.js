import React from 'react';
import Nav from '../BottomNav/index';
import SidebarExampleTransitions from '../sideBar';
import { Grid, Statistic, Header, Icon, Image } from 'semantic-ui-react';
import './main.css';
const Main = () => {
  return (

    <Grid columns={3} stackable style={{height: '100vh'}}>

      <Grid.Row style={{height: '80%'}} id="banner">
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>
        
        </Grid.Column>
        <Grid.Column>
          <Header>

          </Header>
          <Header as='h3' textAlign='right'>
            The Last Stand Tavern
    </Header>

        </Grid.Column>
      </Grid.Row>
   

      <Grid.Row  style={{height: '20%'}} id="middle">
      <Grid.Column style={{margin:'auto'}}>
          <Nav/>
        </Grid.Column>
        <Grid.Column style={{margin:'auto'}}>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Welcome</Header.Content>
          </Header>
          <Image
            centered
            size='large'
            src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
          />

        </Grid.Column>
        <Grid.Column style={{margin:'auto'}}>
        <Statistic.Group horizontal>
    <Statistic>
      <Statistic.Value>427</Statistic.Value>
      <Statistic.Label>home craft beers</Statistic.Label>
    </Statistic>
    <Statistic>
      <Statistic.Value>3,322</Statistic.Value>
      <Statistic.Label>wings eaten</Statistic.Label>
    </Statistic>
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Tasks</Statistic.Label>
    </Statistic>
  </Statistic.Group>
        </Grid.Column>
      </Grid.Row>


      {/* <Grid.Row style={{height: '10%'}} >
        <Grid.Column>
         
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>

          <SidebarExampleTransitions />
        </Grid.Column>
      </Grid.Row> */}

    </Grid>
   
  )

}


export default Main;