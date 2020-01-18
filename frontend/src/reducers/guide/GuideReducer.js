

export function rootReducer(state = { guides: [] }, action = {}) {
    switch (action.type) {

        case 'SET_GUIDES':

            return { ...state, guides: action.guides }
        case 'ADD_GUIDE':
            return {
                ...state, guides: [...state.guides, action.guide]
            }

        case 'GET_GUID':

            return { ...state, guide: action.guide }
        // case 'UPDATE_ORDER':
        //     return {

        //     }
        // case 'EDIT_PROFILE':
        //     const guide = guides[idx]
        //     const newGuide = {...guide,...action.guides}
        //     return {
        //         ...state,
        //         guides: [
        //             ...guides.splice(0,idx),
        //             newGuide,
        //             ...guides.splice(0 + idx)
        //         ]
        //     }
        // case 'ADD_REVIEW': {
        //     return {
        //         ...state, guides: [...state.guides.reviews, action.guides.review]
        //     }
        // }
    }
    return state;
}