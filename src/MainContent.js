import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ImageSlider from './ImageSlider';
import './MainContent.css';

const cards = [
    { title: "Card 1", description: "This is the first card", imgUrl: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68/150" },
    { title: "Card 2", description: "This is the second card", imgUrl: "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4/150" },
    { title: "Card 3", description: "This is the third card", imgUrl: "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY/150" },
    { title: "Card 4", description: "This is the fourth card", imgUrl: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68/150" },
    { title: "Card 5", description: "This is the fifth card", imgUrl: "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4/150" },
    { title: "Card 6", description: "This is the sixth card", imgUrl: "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY/150" },
];

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="card">
            <img src={imgUrl} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const MainContent = () => {
    return (
        <Box>
            <ImageSlider />
            <Container maxWidth="md" sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Restaurant name
                </Typography>
                <Typography variant="h5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad architecto atque beatae commodi eligendi, neque, obcaecati pariatur perferendis quasi rem similique tempore. Maxime!
                </Typography>
            </Container>

            {/* Rendering the cards */}
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'space-between' }}>
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} imgUrl={card.imgUrl} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default MainContent;
