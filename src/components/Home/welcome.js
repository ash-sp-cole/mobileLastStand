import React, { Component } from 'react';
import { Header, Grid, Icon, Image } from 'semantic-ui-react';
import Stats from './stats';
import logo from "../Home/logo.png";

const Welcome= () => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
       
      <Header as='h2' icon textAlign='center'>
      
          <Header.Content>Welcome</Header.Content>
        </Header>
        <Image
          centered
          size='large'
          src={logo}
        />
      </Grid.Column>
      <Grid.Column>
     <Stats/>
      </Grid.Column>
    
    </Grid.Row>

   </Grid>
)
export default Welcome;