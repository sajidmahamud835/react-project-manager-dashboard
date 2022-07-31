import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailsCard from '../../../components/ProjectDetailsCard/ProjectDetailsCard';
import projects from '../../../DummyData';

const ViewProject = () => {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));

    return (
        <div>
            <h1>View Project</h1>
            <ProjectDetailsCard data={project} />
        </div>
    );

};

export default ViewProject;