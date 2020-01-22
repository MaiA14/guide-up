import HttpService from './HttpService.js'
import axios from 'axios';
export default {
    query,
    deleteGuide,
    getGuideById,
    save,
    addGuide,
    addReview
};

const url = "http://localhost:3001/api/guide"
var Axios = axios.create({
    withCredentials: true
});

function query(city = '') {
    let item = HttpService.get(`guide?city=${city}`)
    return item
}

function getGuideById(guideId) {
    return HttpService.get(`guide/${guideId}`)
}

function addGuide(name, guide) {
    return HttpService.post('guides', guide).then(res => res.data);
}

function save(guide) {
    if (guide._id)
        return HttpService.put(`guide/${guide._id}`, guide)
    return HttpService.post(`guide,${guide}`)
}

function addReview(review, guide) {
    let newGuide = { ...guide }
    newGuide.reviews.push(review)
    const avgRank = _calcGuideRank(newGuide)
    newGuide = { ...guide, avgRank }
    return save(newGuide)
}

function deleteGuide(guideId) {
    return HttpService.delete(`guide${guideId}`).then(res => res.data);
}

function _calcGuideRank(guide) {
    let guideRank = guide.reviews.reduce((acc, currRank) => {
        return acc + Number(currRank.rank)
    }, 0)
    return (guideRank / guide.reviews.length).toFixed(1);
}
