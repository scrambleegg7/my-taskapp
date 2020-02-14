import React, { Component } from 'react'
//import ProjectList from './ProjectList'
import moment from 'moment';

import ReadMoreReact from 'read-more-react';



const ProjectSummary = ( {project} ) => {  
    
    const shortText = project.content.substring(0,30);
    const fullText =  project.content;

    return (
        <div className="card z-depth-5 project-summary">
            <div className="card-content black-text text-darke-3">
                <span className="card-title blue-text">{project.title} </span>
                <ReadMoreReact text={fullText} min={20} readMoreText="...read more"/> 
                
                {/* project.createdAt.toDate().toISOString() should be used. */}
                <div className="grey-text">
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p>{ moment(  project.createdAt.toDate().toISOString() ).format("YYYY-MMM-DD h:mm:ss a")  }</p>
                </div>
            </div>
        </div>
    )

}
export default ProjectSummary;