import guideService from '../../service/guideService.js'

// THUNK
export function loadGuides(filterBy = '') {
    return async (dispatch) => {
        try {

            const guides = await guideService.query(filterBy);
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

    return async (dispatch) => {

        const guide = await guideService.getGuideById(guidId)

        dispatch({ type: 'GET_GUID', guide })
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