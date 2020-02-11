import React, { Component } from 'react'
//import ProjectList from './ProjectList'
import moment from 'moment';

const ProjectSummary = ( {project} ) => (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darke-3">
            <span className="card-title">{project.title} {project.id} </span>
            <p>Posted by {project.authorFirstName} {project.authorLastName}
            </p>
                <p className="grey-text">{ moment(  project.createdAt.toDate().toString() ).calendar()  }</p>
        </div>
    </div>
)



export default ProjectSummary;