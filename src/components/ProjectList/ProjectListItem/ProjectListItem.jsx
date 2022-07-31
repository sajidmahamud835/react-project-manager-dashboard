import { Avatar, Chip, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const ProjectListItem = (props) => {
    const { id, name, description, owner, createdAt, budget, category, status, members } = props;
    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Chip label={category.name} color={category.color} />
                            <Typography sx={{ marginRight: 1 }} component="h3" variant="h6" color="textPrimary">
                                {name}
                            </Typography>
                            <Typography component="span" variant="body2" color="textDisabled">
                                {description}
                            </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography sx={{ marginRight: 1 }} component="span" variant="body2" color="textPrimary">
                                {owner}
                            </Typography>
                            <Typography component="span" variant="body2" color="textDisabled">
                                {createdAt}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </div>
    );
};

export default ProjectListItem;