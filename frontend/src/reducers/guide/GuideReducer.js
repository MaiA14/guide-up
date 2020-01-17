const guides= [
    { name: 'Lihi Gozlan', description:'about me', langugages:'Hebrew, English', _id: '123',city:'tel-aviv', imgUrl: 'https://i.imgur.com/UA5CUkB.png'},
    { name: 'Ron Levy', description:'about me', langugages:'Hebrew, English', _id: '123',city:'tel-aviv', imgUrl: 'https://i.imgur.com/PjT8rth.png'},
    { name: 'Michèle Krüsi', description:'about me', langugages:'French,Swedish',_id: '321',city:'paris', imgUrl: 'https://i.imgur.com/IvVU9Z1.png'},
    { name: 'Philip montre', description:'about me', langugages:'French,Swedish',_id: '321',city:'paris', imgUrl: 'https://i.imgur.com/UyDensn.png'},
    { name: 'Sara Sanchezss', description:'about me', langugages:'French,Swedish',_id: '321',city:'paris', imgUrl: 'https://i.imgur.com/scq2FiT.png'},
    { name: 'Aida Domenech',description:'about me', langugages:'Spanish, Italian',_id: '323',city:'barcelona', imgUrl: 'https://i.imgur.com/3SYbClk.png'},
    { name: 'Pablo Habrez',description:'about me', langugages:'Spanish, Italian',_id: '323',city:'barcelona', imgUrl: 'https://i.imgur.com/bWsYMbG.png'},
    { name: 'Rodrirogo Labes',description:'about me', langugages:'Spanish, Italian',_id: '323',city:'barcelona', imgUrl: 'https://i.imgur.com/oqQN5vY.png'},
    { name: 'Looise Cooney', description:'about me', langugages:'English, Spanish', _id: '623',city:'new-york', imgUrl: 'https://i.imgur.com/SXXdCG4.jpg3'},
    { name: 'Kristina Bazan', description:'about me', langugages:'English, Spanish', _id: '623',city:'new-york', imgUrl: 'https://i.imgur.com/g5ia1n6.png'},
    { name: 'Andy Torres', description:'about me', langugages:'English, Spanish',_id: '654',city:'mexico', imgUrl: 'https://i.imgur.com/0KKU0VA.png'},
    { name: 'Melissa Alatorre', description:'about me', langugages:'English, Spanish',_id: '654',city:'mexico', imgUrl: 'https://i.imgur.com/YUfx8Zs.png'}
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