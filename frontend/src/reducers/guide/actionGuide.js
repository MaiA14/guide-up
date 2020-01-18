import guideService from '../../service/guideService.js'

// THUNK
export function loadGuides() {
    return async (dispatch) => {
        try {

            const guides = await guideService.query('');
            dispatch(setGuides(guides))

        } catch (err) {
            console.log('GuideActions: err in loadGuides', err);

        }

    }
}

function setGuides(guides) {
    return {
        type: 'SET_GUIDES',
        guides

    }
}
// THUNK
export function getGuide(guidId) {

    return (dispatch) => {


        dispatch({ type: 'GET_GUIDS', guidId })
    }
}


// // THUNK
// export function removeTodo(todoId) {
//     return (dispatch) => {
//         TodoService.remove(todoId)
//             .then(() => {
//                 dispatch({type: 'TODO_REMOVE',  todoId})
//             })
//     }
// }
// export function saveTodo(todo) {
//     console.log('action ',todo)
//    return (dispatch) => {
//         const actionType = (todo._id) ? 'TODO_UPDATE' : 'TODO_ADD'; 
//         TodoService.save(todo)
//             .then((todo) => {
//                 dispatch({type: actionType,  todo})
//             })
//     }
// }