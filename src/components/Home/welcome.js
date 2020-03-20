import React, { Component } from 'react';
import { Header, Grid, Modal,Icon, Image,Segment,Input,Divider,Button, Search, Menu, GridColumn} from 'semantic-ui-react';
import Stats from './stats';
import logo from "../Home/logo.png";
import SearchBar from '../SearchBar/';
import menu1 from './menu1.jpg';
import menu2 from './menu2.jpg';

class Welcome extends Component {


render(){

  return (


  <Grid columns={2} stackable>
    <Grid.Row>
      <Grid.Column>
      
          <Segment basic textAlign='center'>
   <SearchBar/>

    <Divider horizontal>Or</Divider>

    <Modal trigger={  <Button content='View Menu' color='teal' icon='right arrow' labelPosition='right' />}>
    <Modal.Header style={{textAlign:'center'}}>The Last Stand Tavern</Modal.Header>
    <Modal.Content image>
      <div className='image'>
      <Image src={menu1}/>
      </div>
    
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
  </Segment>
     
       
      </Grid.Column>
      <Grid.Column>
     <Stats/>
      </Grid.Column>
    
    </Grid.Row>
    
    <Grid.Row>
      <Grid.Column>
       
      <Header as='h3'>   <Icon name='google'/>  As rated on Google Review</Header>
      <Icon name='star'/>      
      <Icon name='star'/>      
      <Icon name='star'/>
      <Icon name='star'/>
      <Icon name='star half'/>
       
      </Grid.Column>
    <GridColumn>
  
    </GridColumn>
    
    </Grid.Row>
   </Grid>

 )
  }
}

class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header style={{textAlign:'center'}}>The Last Stand Tavern</Modal.Header>
        <Modal.Content image>
      <div className='image'>
      <Image src={menu2}/>
      </div>
    
    </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}
export default Welcome;