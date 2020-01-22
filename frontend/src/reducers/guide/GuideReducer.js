

export function rootReducer(state = { guides: [] }, action = {}) {
    switch (action.type) {

        case 'SET_GUIDES':
        console.log('action.guides ',action.guides)
            return { ...state, guides: action.guides }
        case 'ADD_GUIDE':
            return {
                ...state, guides: [...state.guides, action.guide]
            }
        case 'GET_GUID':
            return { ...state, guide: action.guide }
        case 'GUIDE_UPDATE':
            return { ...state, guide: action.newGuide }


    }
    return state;
}