export const createProject = (project) => {

    console.log("createProject from projectActions : ", project)

    return (dispatch , getState, { getFirebase, getFirestore }     ) => {
        // make async 
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'add firstname from projectActions.',
            authorLastName: 'add lastname from projectActions.',
            authorId: 12345,
            createdAt:new Date()
        })
        .then( () => {
            dispatch(
                {
                    type: 'CREATE_PROJECT', 
                    project 
                })
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'CREATE_PROJECT_ERROR', 
                    err
                })

        })

    }

};
