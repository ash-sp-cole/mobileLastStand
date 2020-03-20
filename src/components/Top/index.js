import React from 'react'
import { Grid,Header, Image, Statistic } from 'semantic-ui-react'
import logo from '../Home/logo.png';
const Top = () => (
  <Grid>
  <Grid.Row>
    <Grid.Column>
      <Image
        centered
        size='medium'
        src={logo}
      />
    </Grid.Column>
  
  </Grid.Row>

 </Grid>
  
)

export default Top;