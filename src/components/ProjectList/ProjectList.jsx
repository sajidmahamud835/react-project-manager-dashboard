import { Card, CardContent, CardHeader, Divider, List, ListItemButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectListItem from './ProjectListItem/ProjectListItem';

const ProjectList = (props) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const navigate = useNavigate()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        navigate(`/projects/view/${index}`)
    };

    return (
        <div>
            <Card>
                <CardContent>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {
                            props.data.map((index) => (
                                <article key={index.id}>
                                    <ListItemButton
                                        selected={selectedIndex === index.id}
                                        onClick={(event) => handleListItemClick(event, index.id)}
                                    >
                                        <ProjectListItem {...index} />
                                    </ListItemButton>
                                    {index !== 5 && <Divider component="li" />}
                                </article>
                            ))
                        }
                    </List>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProjectList;