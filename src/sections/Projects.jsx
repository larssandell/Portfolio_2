import React from 'react';
import SectionContainer from '../components/sectionComp/SectionContainer';
import ProjectsGallery from '../components/ProjectGallery';

const Projects = () => {
    return (
        <SectionContainer id='projects' title={'menu_projects'} maxWidth='xl'>
            <ProjectsGallery />
        </SectionContainer>
    );
};

export default Projects;
