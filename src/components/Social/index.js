import React, { Component } from 'react';
import { Header, Grid, Icon, Image } from 'semantic-ui-react';
import Stats from '../Home/stats';


const Social = () => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
       
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
      <Grid.Column>
       <Stats/>
      </Grid.Column>
    
    </Grid.Row>

   </Grid>
)
export default Social;