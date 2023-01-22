import React from 'react';

import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';

function Hero() {
    const content = {
        'header-p1': 'Lorem ipsum dolor',
        'header-p2': 'sit amet, consectetur adipiscing elit.',
        'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
        'primary-action': 'Book a table',
        'secondary-action': 'Order Now',
    };


    return(
        <Container>
            <Box>
                <Typography variant="h2" component="h2" gutterBottom={true}>
                    <Typography color="secondary" variant="h2" component="span">{content['header-p1']} </Typography>
                    <Typography variant="h2" component="span">{content['header-p2']}</Typography>
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                </Container>
                <Box mt={3}>
                    <Button variant="contained" color="secondary">{content['primary-action']}</Button>
                    <Button variant="outlined" color="secondary">{content['secondary-action']}</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Hero;