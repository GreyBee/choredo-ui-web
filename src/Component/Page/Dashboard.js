import React, { Component } from 'react';
import {Header, Anchor, Title, Box, Search, Menu} from 'grommet';


class Dashboard extends Component {
    render() {
        return (
                <Header>
                    <Title>
                        Sample Title
                    </Title>
                    <Box flex={true}
                         justify='end'
                         direction='row'
                         responsive={false}>
                        <Search inline={true}
                                fill={true}
                                size='medium'
                                placeHolder='Search'
                                dropAlign={{"right": "right"}} />
                        <Menu
                              dropAlign={{"right": "right"}}>
                            <Anchor href='#'
                                    className='active'>
                                First
                            </Anchor>
                            <Anchor href='#'>
                                Second
                            </Anchor>
                            <Anchor href='#'>
                                Third
                            </Anchor>
                        </Menu>
                    </Box>
                </Header>
        );
    }
}

export default Dashboard ;
