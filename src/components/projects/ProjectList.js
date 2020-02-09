import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ( { projects } ) => (
    <div className="project-list section">

        {/* projects is neccesaary to checkout existence of the array. */}
        {projects && projects.map( project => {
            return(
                <Link to={'/project/' + project.id  }>
                    <ProjectSummary project={project} key={project.id} />
                </Link>
            )

        })}
    </div>
)


export default ProjectList;