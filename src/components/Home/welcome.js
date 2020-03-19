import React, { Component } from 'react';
import { Header, Grid, Icon, Image } from 'semantic-ui-react';
import Stats from './stats';
import logo from "../Home/logo.png";
import {Animated} from "react-animated-css";
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
      <Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}> <Stats/> </Animated>
      </Grid.Column>
    
    </Grid.Row>

   </Grid>
)
export default Welcome;