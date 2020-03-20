import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import menu1 from '../Home/menu1.jpg';
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
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const Menu = () => (
  <Modal trigger={<Button>Multiple Modals</Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
      </div>
      <Modal.Description>
  
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default Menu;