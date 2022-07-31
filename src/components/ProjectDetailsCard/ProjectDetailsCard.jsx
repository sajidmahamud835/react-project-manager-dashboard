import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const ProjectDetailsCard = (props) => {
    const { name, description, image, url } = props.data;
    return (
        <Card sx={{}}>
            <CardHeader title={name} />
            <CardContent>
                <Typography component="p" variant="body1">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectDetailsCard;