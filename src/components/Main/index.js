import React, { Component } from 'react';
// import Nav from '../BottomNav/index';
// import SidebarExampleTransitions from '../sideBar';
import { Grid, Menu } from 'semantic-ui-react';
import './main.css';

import Stats from '../Home/stats';
import Welcome from '../Home/welcome';

class Main extends Component {


  state = { activeItem: 'Home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   renderMain (){
if (this.state.activeItem === "Home"){
  return <Stats/>
}
else if (this.state.activeItem === "Menu"){
  return <Welcome/>
}

  }

  render() {
    const { activeItem } = this.state

    console.log(this.state.activeItem, " render main ")
    return (

      <Grid columns={3} stackable style={{ height: '100vh' }}>

        <Grid.Row style={{ height: '80%' }} id="banner">

        </Grid.Row>


        <Grid.Row  id="middle">
          <Grid.Column style={{ margin: 'auto' }}>
            <Menu pointing secondary vertical size='massive' >
              <Menu.Item

                name='Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}

              />
              <Menu.Item
                name='Menu'
                active={activeItem === 'Menu'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Visit'
                active={activeItem === 'Visit'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Social'
                active={activeItem === 'Social'}
                onClick={this.handleItemClick}
              />

            </Menu>
          </Grid.Column>
          <Grid.Column style={{ margin: 'auto' }}>
            {this.renderMain()}
          </Grid.Column>
          <Grid.Column style={{ margin: 'auto' }}>

            <Stats />
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
}


export default Main;