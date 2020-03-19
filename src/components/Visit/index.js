
import React, { Component } from 'react';
import { Header, Grid, Icon, Image } from 'semantic-ui-react';
import Stats from '../Home/stats';
import HorizontalSidebar from '../sideBar';

const Visit = () => (
  <Grid columns={1} >
    <Grid.Row>
      <Grid.Column style={{ margin: 'auto', width:'40vw' }}>
       
     <HorizontalSidebar/>
      </Grid.Column>
   
    
    </Grid.Row>

   </Grid>
)
export default Visit;