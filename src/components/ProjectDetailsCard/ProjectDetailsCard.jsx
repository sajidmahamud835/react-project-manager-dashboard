import React from 'react';
import { Card, CardContent, CardHeader, Chip, Typography } from '@mui/material';

const ProjectDetailsCard = (props) => {
    const { name, description, category, url } = props.data;
    return (
        <Card sx={{ minHeight: 400 }}>
            <CardHeader title={name} />
            <CardContent>
                <Chip sx={{ marginTop: 0, marginBottom: 2 }} label={category.name} color={category.color} />
                <Typography component="p" variant="body1"><strong>Description:</strong> {description}</Typography>
            </CardContent>
            <CardContent>
                <Typography component="p" variant="body2">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                    </a>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectDetailsCard;