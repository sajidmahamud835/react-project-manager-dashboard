import { Divider, List, ListItemButton } from '@mui/material';
import React from 'react';
import ProjectListItem from './ProjectListItem/ProjectListItem';

const ProjectList = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const data = [
        {
            id: 1,
            name: 'Create me a website with React, Material-UI and Webpack, and deploy it to Firebase.',
            description: 'lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe.',
            owner: 'John Doe',
            createdAt: '2020-01-01',
            budget: '$100',
            category: {
                id: 1,
                name: 'Web Development',
                color: 'primary',
            },
            status: 'In Progress',
            members: [
                {
                    id: 1,
                    name: 'John Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
                },
                {
                    id: 3,
                    name: 'Jack Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
                },
            ],
        },
        {
            id: 2,
            name: 'Create me a Mobile App with React Native and Firebase.',
            description: 'lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe.',
            owner: 'John Doe',
            createdAt: '2020-01-01',
            budget: '$100',
            category: {
                id: 2,
                name: 'App Development',
                color: 'warning',
            },
            status: 'In Progress',
            members: [
                {
                    id: 1,
                    name: 'John Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
                },
                {
                    id: 3,
                    name: 'Jack Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
                },
            ],
        },
        {
            id: 3,
            name: 'Create me a dashboard with React, Material-UI and Webpack.',
            description: 'lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe.',
            owner: 'Jane Doe',
            createdAt: '2020-01-01',
            budget: '$100',
            category: {
                id: 1,
                name: 'Web Development',
                color: 'primary',
            },
            status: 'In Progress',
            members: [
                {
                    id: 1,
                    name: 'John Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
                },
                {
                    id: 3,
                    name: 'Jack Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
                },
            ],
        },
        {
            id: 4,
            name: 'Desing UI for the website.',
            description: 'lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe.',
            owner: 'Jane Doe',
            createdAt: '2020-01-01',
            budget: '$100',
            category: {
                id: 2,
                name: 'UI/UX Design',
                color: 'error',
            },
            status: 'In Progress',
            members: [
                {
                    id: 1,
                    name: 'John Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
                },
                {
                    id: 3,
                    name: 'Jack Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
                },
            ],
        },
        {
            id: 5,
            name: 'Fix the bug in the website.',
            description: 'lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe.',
            owner: 'Jack Doe',
            createdAt: '2020-01-01',
            budget: '$100',
            category: {
                id: 1,
                name: 'Web Development',
                color: 'primary',
            },
            status: 'In Progress',
            members: [
                {
                    id: 1,
                    name: 'John Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
                },
                {
                    id: 3,
                    name: 'Jack Doe',
                    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
                },
            ],
        },

    ];
    return (
        <div>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    data.map((index) => (
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
        </div>
    );
};

export default ProjectList;