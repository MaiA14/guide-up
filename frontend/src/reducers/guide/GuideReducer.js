const guides = [
    { name: 'Kelly Jones', description: 'about me', langugages: 'Hebrew, English', _id: '123', city: 'israel', imgUrl: 'https://imgbbb.com/images/2020/01/16/paris.jpg' },
    { name: 'Ben Yager', description: 'about me', langugages: 'Hebrew, English', _id: '321', city: 'paris', imgUrl: 'https://imgbbb.com/images/2020/01/16/paris.jpg' },
    { name: 'or', description: 'about me', langugages: 'Hebrew, English', _id: '323', city: 'barcelona', imgUrl: 'https://imgbbb.com/images/2020/01/16/barceolna.jpg' },
    { name: 'puki', description: 'about me', langugages: 'Hebrew, English', _id: '623', city: 'new-york', imgUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
    { name: 'puki', description: 'about me', langugages: 'Hebrew, English', _id: '654', city: 'mexico', imgUrl: 'https://imgbbb.com/images/2020/01/16/mexico.jpg' },
    { name: 'mai', description: 'about me', langugages: 'Hebrew, English', _id: '652', city: 'mexico', imgUrl: 'https://imgbbb.com/images/2020/01/16/mexico.jpg' }



]



export function rootReducer(state = { guides: [] }, action = {}) {
    switch (action.type) {

        case 'SET_GUIDES':

            return { ...state, guides }
        case 'ADD_GUIDE':
            return {
                ...state, guides: [...state.guides, action.guide]
            }

        case 'GET_GUIDS':
            console.log(action)

            return {...state, guide: state.guides.find(guide => guide._id === action.guidId)}
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