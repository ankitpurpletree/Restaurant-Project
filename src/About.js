import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
        </Container>
    );
};

export default About;
