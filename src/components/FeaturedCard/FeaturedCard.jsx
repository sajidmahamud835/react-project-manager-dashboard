import { BusinessCenter } from '@mui/icons-material';
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import './FeaturedCard.scss';

const FeaturedCard = (props) => {
    const { title, subtitle, Icon, link } = props;

    console.log(props);
    return (
        <artical className="featuredCard">
            <Card sx={{ height: 150 }}>
                <Grid container spacing={3} sx={{ margin: '0 0' }}>
                    <Grid item xs={2}>
                        <CardContent>
                            <IconButton>
                                <Icon fontSize="large" />
                            </IconButton>
                        </CardContent>
                    </Grid>
                    <Grid item xs={8}>
                        <CardContent>
                            <Typography variant="h5" align='center' component="h2">
                                {title}
                            </Typography>
                            <Typography align='center' variant="body1" component="p">
                                {subtitle}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </artical >
    );
};

export default FeaturedCard;