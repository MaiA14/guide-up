const guides= [
    { name: 'Kelly Jones', description:'about me', langugages:'Hebrew, English', _id: '123',city:'israel', imgUrl: ''},
    { name: 'Ben Yager', description:'about me', langugages:'Hebrew, English',_id: '321',city:'paris', imgUrl: 'https://imgbbb.com/images/2020/01/16/paris.jpg'},
    { name: 'or',description:'about me', langugages:'Hebrew, English',_id: '323',city:'barcelona', imgUrl: 'https://imgbbb.com/images/2020/01/16/barceolna.jpg'},
    { name: 'puki', description:'about me', langugages:'Hebrew, English', _id: '623',city:'new-york', imgUrl: 'https://imgbbb.com/images/2020/01/16/ny.jpg'},
    { name: 'puki', description:'about me', langugages:'Hebrew, English',_id: '654',city:'mexico', imgUrl: 'https://imgbbb.com/images/2020/01/16/mexico.jpg'}


]



export function rootReducer(state = { guides: [] }, action = {}) {
    switch (action.type) {

        case 'SET_GUIDES':
            console.log(guides)
            return { ...state, guides }
        case 'ADD_GUIDE':
            return {
                ...state, guides: [...state.guides, action.guide]
            }
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