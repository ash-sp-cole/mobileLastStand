import React, { Component } from 'react';
// import Nav from '../BottomNav/index';
// import SidebarExampleTransitions from '../sideBar';
import { Grid, Menu,Container } from 'semantic-ui-react';
import './main.css';

import Stats from '../Home/stats';
import Welcome from '../Home/welcome';
import Visit from '../Visit';
import Social from '../Social';
import Top from '../Top';
class Main extends Component {


  state = { activeItem: 'Home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderMain() {
    if (this.state.activeItem === "Home") {
      return <Welcome/>
    }
    else if (this.state.activeItem === "Menu") {
      return <Welcome />
    }
    else if (this.state.activeItem === "Visit") {
      return <Visit />
    }

    else if (this.state.activeItem === "Social") {
      return <Social />
    }


  }

  render() {
    const { activeItem } = this.state

    console.log(this.state.activeItem, " render main ")
    return (

      <Grid columns={3} stackable >

{/* 
         ========================= TOP ================================ */}

        <Grid.Row style={{ height: '20%' }} id="wood" >
        <Grid.Column style={{ margin: 'auto' }}>
        <Grid.Column style={{ margin: 'auto', color:'white' }}>
            <Menu  inverted pointing secondary vertical size='massive' >
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
          </Grid.Column>
          <Grid.Column style={{ margin: 'auto'}}>
            <Top/>
          </Grid.Column>
          <Grid.Column style={{ margin: 'auto'}}>
          
          </Grid.Column>
        </Grid.Row>
{/* 
         ========================= MIDDLE BANNER ================================ */}

        <Grid.Row style={{ height: '50vh' }} id="banner">

        </Grid.Row>

{/* 
         =========================  DISPLAY SECTION MAIN ================================ */}

  <Grid.Row id="mainSection"  style={{margin:'auto',color:'white', height: '20%' }}>
  
          <Grid.Column style={{margin:'auto'}} id="mainBanner">
            <Container textAlign='center'>
            {this.renderMain()}
            </Container>
          </Grid.Column>

        </Grid.Row> 

{/* 
         ========================= BOTTOM EXTRA BANNER ================================ */}


         <Grid.Row style={{ height: '50vh' }} id="banner2" >
  
      </Grid.Row> 


{/* 
         ========================= FOOTER ================================ */}


      <Grid.Row style={{ height: '20%' }} >
        <Grid.Column style={{ margin: 'auto' }}>
          </Grid.Column>
          <Grid.Column style={{ margin: 'auto'}}>
            <Top/>
          </Grid.Column>
          <Grid.Column style={{ margin: 'auto' }}>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )

  }
}


export default Main;