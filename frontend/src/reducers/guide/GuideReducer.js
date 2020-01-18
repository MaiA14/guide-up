const guides= [
    { name: 'Lihi Gozlan', description:'about me', langugages:'Hebrew, English', _id: '123',city:'tel-aviv', imgUrl: 'https://i.imgur.com/UA5CUkB.png'},
    { name: 'Ron Levy', description:'about me', langugages:'Hebrew, English', _id: '124',city:'tel-aviv', imgUrl: 'https://i.imgur.com/PjT8rth.png'},
    { name: 'Shani Sharon', description:'about me', langugages:'Hebrew, English, Spanish', _id: '125',city:'tel-aviv', imgUrl: 'https://i.imgur.com/F2v7Wua.png'},
    { name: 'Hen Dotan', description:'about me', langugages:'Hebrew, English, French', _id: '126',city:'tel-aviv', imgUrl: 'https://i.imgur.com/umycI2Q.png'},

    { name: 'Michèle Krüsi', description:'about me', langugages:'French,Swedish',_id: '321',city:'paris', imgUrl: 'https://i.imgur.com/IvVU9Z1.png'},
    { name: 'Philip montre', description:'about me', langugages:'French,Swedish, Italian',_id: '322',city:'paris', imgUrl: 'https://i.imgur.com/UyDensn.png'},
    { name: 'Francesca Hayward', description:'about me', langugages:'French,Swedish, Russian',_id: '323',city:'paris', imgUrl: 'https://i.imgur.com/rGll9yJ.png'},
    { name: 'Sara Sanchezss', description:'about me', langugages:'French,Swedish',_id: '324',city:'paris', imgUrl: 'https://i.imgur.com/scq2FiT.png'},

    { name: 'Aida Domenech',description:'about me', langugages:'Spanish, Italian, French',_id: '327',city:'barcelona', imgUrl: 'https://i.imgur.com/3SYbClk.png'},
    { name: 'Pablo Habrez',description:'about me', langugages:'Spanish, Italian',_id: '329',city:'barcelona', imgUrl: 'https://i.imgur.com/bWsYMbG.png'},
    { name: 'Rodrigo Labes',description:'about me', langugages:'Spanish, Italian',_id: '3244',city:'barcelona', imgUrl: 'https://i.imgur.com/oqQN5vY.png'},
    { name: 'Jolyn Cyrnn',description:'about me', langugages:'Spanish, Italian',_id: '3243',city:'barcelona', imgUrl: 'https://i.imgur.com/COSWBgK.png'},

    { name: 'Looise Cooney', description:'about me', langugages:'English, Spanish', _id: '6253',city:'new-york', imgUrl: 'https://i.imgur.com/SXXdCG4.jpg3'},
    { name: 'Kristina Bazan', description:'about me', langugages:'English, Spanish', _id: '6223',city:'new-york', imgUrl: 'https://i.imgur.com/g5ia1n6.png'},
    { name: 'Donna Smith', description:'about me', langugages:'English, Spanish', _id: '6213',city:'new-york', imgUrl: 'https://i.imgur.com/VxGl3q0.png'},
    { name: 'Brianna Williams', description:'about me', langugages:'English, Spanish', _id: '1623',city:'new-york', imgUrl: 'https://i.imgur.com/G8frw5M.png'},

    { name: 'Johanna Nelsson', description:'about me', langugages:'English, Spanish',_id: '6504',city:'mexico', imgUrl: 'https://i.imgur.com/f6ofX2Z.png'},
    { name: 'Andy Torres', description:'about me', langugages:'English, Spanish',_id: '6654',city:'mexico', imgUrl: 'https://i.imgur.com/0KKU0VA.png'},
    { name: 'Jordan Clarke', description:'about me', langugages:'English, Spanish',_id: '61541',city:'mexico', imgUrl: 'https://i.imgur.com/V1KvTQX.jpg'},
    { name: 'Melissa Alatorre', description:'about me', langugages:'English, Spanish',_id: '62354',city:'mexico', imgUrl: 'https://i.imgur.com/YUfx8Zs.png'}
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