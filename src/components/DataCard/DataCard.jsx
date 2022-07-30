import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const DataCard = () => {
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        DataCard
                    </Typography>
                    <Typography variant="body2" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium feugiat. Cras aliquet nunc non turpis
                        hendrerit feugiat. Integer turpis arcu, pellentesque eget,
                        tristique eu, elementum at, arcu.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default DataCard;