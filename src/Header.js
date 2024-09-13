import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        The Demo Company
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/menu">Menu</Button>
                    <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
