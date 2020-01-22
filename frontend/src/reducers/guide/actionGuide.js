import guideService from '../../service/guideService.js'

// THUNK
export function loadGuides(filterBy ='') {
    return async (dispatch) => {
        try {

            const guides = await guideService.query(filterBy);
            console.log(filterBy)
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

export function saveGuide(guide,guideId) {
    console.log(guide)
    console.log(guideId)
    return async (dispatch) => {
        const actionType = (guideId) ? 'GUIDE_UPDATE' : 'GUIDE_ADD';

        const newGuide = await guideService.save(guide, guideId)

        dispatch({ type: actionType, newGuide })

    }




}
