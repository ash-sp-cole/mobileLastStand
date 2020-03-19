import React, { Component } from 'react';
import { Header, Grid, Icon, Image } from 'semantic-ui-react';
import Stats from '../Home/stats';
import SocialFeed from './facebookFeed';
import LiveFeed from './liveFeed';


const Social = () => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
       
     <SocialFeed/>
      </Grid.Column>
      <Grid.Column>
       <LiveFeed/>
      </Grid.Column>
    
    </Grid.Row>

   </Grid>
)
export default Social;