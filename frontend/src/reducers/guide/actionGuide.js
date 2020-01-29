import guideService from '../../service/guideService.js'
import { loading, doneLoading } from '../SystemActions.js'

// THUNK
export function loadGuides(filterBy = '') {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const guides = await guideService.query(filterBy);
            dispatch(setGuides(guides))
        } catch (err) {
            console.log('GuideActions: err in loadGuides', err);
        } finally {
            dispatch(doneLoading());
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

    return async (dispatch) => {
        try {
            dispatch(loading());
            const guide = await guideService.getGuideById(guidId)
            dispatch({ type: 'GET_GUIDE', guide })
        } catch (err) {
            console.log('GuideActions: err in loadGuides', err);

        } finally {
            dispatch(doneLoading());

        }


    }
}

export function saveGuide(review, guide) {
    return async (dispatch) => {
        const actionType = (guide._id) ? 'GUIDE_UPDATE' : 'GUIDE_ADD';

        const newGuide = await guideService.save(review, guide)

        dispatch({ type: actionType, newGuide })

    }
}

export function addReview(review, guide) {
    return async (dispatch) => {
        const actionType = 'REVIEW_UPDATE'

        const newGuide = await guideService.addReview(review, guide)
        dispatch({ type: actionType, newGuide })

    }
}

function setUser(user) {
    return {
        type: 'SET_USER',
        user
    }
}

export function logUser(user) {
    return async (dispatch) => {
        const loggedUser = await guideService.checkCredentials(user)
        dispatch(setUser(loggedUser))
    }
}

export function setUserLogIn(user) {
    return (dispatch) => {
        dispatch(setUser(user))
    }
}