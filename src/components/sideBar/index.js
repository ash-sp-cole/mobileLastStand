import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Grid,
    Header,
    Icon,
    Image,
    Segment,
    Sidebar,
    Message,
} from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Segment}
        animation={animation}
        direction={direction}
        visible={visible}
        style={{backgroundColor: 'teal'}}
    >
        <Grid textAlign='center'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Header as='h3'>New Content Awaits</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Icon name='phone' circular />

                </Grid.Column>
                <Grid.Column>

                    <Header as='h3'>New Content Awaits</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Header as='h3'>New Content Awaits</Header>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    </Sidebar>
)

export default class extends Component {
    state = {
        animation: 'scale down',
        direction: 'right',
        dimmed: false,
        visible: false,
    }

    handleAnimationChange = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))


    render() {
        const { animation, dimmed, direction, visible } = this.state
        const vertical = direction === 'bottom' || direction === 'right'

        return (
            <div>


                <Sidebar.Pushable as={Segment} style={{backgroundColor: 'wheat'}}>
                    {vertical ? (
                        <HorizontalSidebar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                            
                        />
                    ) : null}


                    <Sidebar.Pusher dimmed={dimmed && visible} style={{backgroundColor: 'wheat'}}>
                        <Segment basic>
                            <Header as='h3'>WELCOME TO LAST STAND TAVERN</Header>
                            <Message>
                         
                                <Message.Header> <Icon name='bell outline' size='large'/> Changes in Service</Message.Header>
                            <br/>
                                <Header as='h5'>TAKEOUT AND DELIVERY AVAILABLE!!!</Header>
                                <hr/>
                                <p>
                                Hello to all our loyal and supportive customers! As you are probably aware,
                                 Gov. Polis suspended dine-in services at all restaurants and bars in Colorado for the next 30
                                  days. Under the order, Takeout and Delivery services are permitted. Beginning Tuesday, 3/17/20,
                                   we will offer these services during specific times of day and with a limited menu. 
                                   Each day we will post our specials and menu options. Takeout orders can be delivered directly 
                                   to your car if you prefer not to come in. 
                                Credit card payments can be accepted over the phone
    </p>
                            </Message>
                            <Button onClick={this.handleAnimationChange('scale down')} color='teal'>
                                Place an order
        </Button>


                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}
