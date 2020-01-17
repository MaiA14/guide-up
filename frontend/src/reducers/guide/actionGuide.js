




// THUNK
export function loadGuids() {
    return (dispatch) => {

        dispatch(setGuids())
    }
}

function setGuids(todos) {
    return {
        type: 'SET_GUIDES',
        todos
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



