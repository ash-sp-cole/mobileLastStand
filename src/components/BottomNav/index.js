
import React, { Component } from 'react'
import { Menu , Icon} from 'semantic-ui-react'
import './navStyle.css'
export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical size='massive'class="grey" >
        <Menu.Item
      
          name='home'
          active={activeItem === 'home'}
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
    )
  }
}
