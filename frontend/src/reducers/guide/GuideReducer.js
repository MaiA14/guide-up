let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
  loggedInUser: localLoggedinUser,
  guides: []
};



export default function (state = initialState, action = {}) {
    switch (action.type) {

        case 'SET_GUIDES':
            return { ...state, guides: action.guides }
        case 'ADD_GUIDE':
            return { ...state, guides: [...state.guides, action.guide] }
        case 'GET_GUIDE':
            return { ...state, guide: action.guide }
        case 'GUIDE_UPDATE':
            return { ...state, guide: action.newGuide }
        case 'REVIEW_UPDATE':
            return { ...state, guide: action.newGuide }
        case 'SET_USER':
            return { ...state, loggedInUser: action.user };
    }
    return state;
}