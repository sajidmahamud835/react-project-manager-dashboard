import { Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectConversation from '../../../components/ProjectConversation/ProjectConversation';
import ProjectDetailsCard from '../../../components/ProjectDetailsCard/ProjectDetailsCard';
import ProjectSummaryCard from '../../../components/ProjectSummaryCard/ProjectSummaryCard';
import projects from '../../../DummyData';

const ViewProject = () => {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));

    return (
        <div>
            <h1>View Project</h1>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <ProjectDetailsCard data={project} />
                    <ProjectConversation data={project} />
                </Grid>
                <Grid item xs={4}>
                    <ProjectSummaryCard data={project} />
                </Grid>

            </Grid>
        </div>
    );

};

export default ViewProject;