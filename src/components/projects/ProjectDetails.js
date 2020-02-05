import React from 'react';


const ProjectDetails = (props) => {

    console.log("props match params",props.match.params)
    
    const id = props.match.params.id;

    return (        
        <div className="card z-depth-0 project-details">
            <div className="card z-depth-0">
                <div className="card-content"> 
                    <span className="card-title">Project Title Id:{id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by xxxx </div>
                    <div>Feb. 01, 2020</div>
                </div>
            </div>
        </div>
    )

}

export default ProjectDetails;

