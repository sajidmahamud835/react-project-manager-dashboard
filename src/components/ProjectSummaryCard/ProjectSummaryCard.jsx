import { PaymentsTwoTone, Person, SignalWifiStatusbar4Bar } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, Chip, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ownerDocument, Typography } from '@mui/material';
import React from 'react';

const ProjectSummaryCard = (props) => {
    const { owner, budget, status } = props.data;
    return (
        <div>
            <Card sx={{}}>
                <CardHeader title="Project Summary" />
                <CardContent>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Owner"
                                />
                                <ListItemText
                                    secondary={<Chip avatar={<Avatar alt={owner.name} src={owner.avatar} />} label={owner.name} />}
                                />
                            </ListItemButton>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PaymentsTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Budget"

                                />
                                <ListItemText
                                    secondary={budget}
                                />
                            </ListItemButton>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SignalWifiStatusbar4Bar />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Status"
                                />
                                <ListItemText
                                    secondary={<Chip label={status} />}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProjectSummaryCard;