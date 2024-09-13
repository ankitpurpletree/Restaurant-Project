import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#333', color: 'white', py: 2 }}>
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="body1">
                    &copy; 2023 The Demo Company. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
