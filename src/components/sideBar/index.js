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
} from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Segment}
        animation={animation}
        direction={direction}
        visible={visible}
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


                <Sidebar.Pushable as={Segment}>
                    {vertical ? (
                        <HorizontalSidebar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                        />
                    ) : null}


                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

                            <Button onClick={this.handleAnimationChange('scale down')}>
                                Contact Us
        </Button>


                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}
