import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';

const Welcome = () =>{

    return(
        <div>
             <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Welcome</Header.Content>
          </Header>
          <Image
            centered
            size='large'
            src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
          />

        </div>
    )

}

export default Welcome;