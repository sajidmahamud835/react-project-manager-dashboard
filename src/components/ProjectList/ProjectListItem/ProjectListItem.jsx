import { Avatar, Chip, Grid, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const ProjectListItem = (props) => {
    const { id, name, description, owner, createdAt, budget, category, status, members } = props;
    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Chip sx={{ marginBottom: 1 }} label={category.name} color={category.color} />
                            <Grid container spacing={3}>
                                <Grid item xs={10}>
                                    <Typography component="h3" variant="h6" color="textPrimary">
                                        {name}
                                    </Typography>
                                    <Typography component="span" variant="body2" color="textDisabled">
                                        {description}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography component="span" variant="h4" color="textDisabled">
                                        {budget}
                                    </Typography>
                                    <Chip sx={{ marginTop: 3 }} label={status} />
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <br />
                            <Typography sx={{ marginRight: 1 }} component="span" variant="body2" color="textPrimary">
                                <Chip
                                    avatar={<Avatar alt={owner.name} src={owner.avatar} />}
                                    label={owner.name}
                                />
                            </Typography>
                            <Typography component="span" variant="body2" color="textDisabled">
                                {createdAt}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </div >
    );
};

export default ProjectListItem;