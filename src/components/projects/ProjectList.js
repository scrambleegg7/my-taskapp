import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = ( { projects } ) => (
    <div className="project-list section">

        {/* projects is neccesaary to checkout existence of the array. */}
        {projects && projects.map( project => {
            return(
                <ProjectSummary project={project} key={project.id} />
            )

        })}
    </div>
)


export default ProjectList;