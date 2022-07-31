import React from 'react';
import ProjectList from '../../components/ProjectList/ProjectList';
import projects from '../../DummyData';

const Projects = () => {
    return (
        <div>
            <h1>Browse Projects</h1>
            <ProjectList data={projects} />
        </div>
    );
};

export default Projects;