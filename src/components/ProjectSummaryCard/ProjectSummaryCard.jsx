import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';

const ProjectSummaryCard = (props) => {
    const { name, description } = props.data;
    return (
        <div>
            <Card sx={{}}>
                <CardHeader title="Project Summary" />
                <CardContent>
                    <Typography component="p" variant="body1">{description}</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProjectSummaryCard;