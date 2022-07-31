import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const ProjectDetailsCard = (props) => {
    const { name, description, image, url } = props.data;
    return (
        <Card sx={{ width: '70%' }}>
            <CardHeader title={name} />
            <CardContent>
                <Typography sx={{ marginTop: 3 }} component="p" variant="body1">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectDetailsCard;