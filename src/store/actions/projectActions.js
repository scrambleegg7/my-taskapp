export const createProject = (project) => {

    console.log("createProject from projectActions : ", project)

    return (dispatch , getState) => {
        // make async 
        dispatch(
            {
                type: 'CREATE_PROJECT', 
                project 
            })
    }

};
