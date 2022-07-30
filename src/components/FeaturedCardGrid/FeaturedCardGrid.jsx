import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const FeaturedCardGrid = (props) => {
    return (
        <section>

            <Box sx={{ flexGrow: 1, margin: '20px 20px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {props.data.map((d) => (
                        <Grid item xs={2} sm={4} md={4} key={d.id}>
                            <FeaturedCard {...d} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </section>
    );
};

export default FeaturedCardGrid;