import axios from 'axios';

import HttpService from './HttpService.js'
import storageService from './storageService.js'
export default {
    query,
    deleteGuide,
    getGuideById,
    save,
    addGuide,
    addReview,
    checkCredentials,
    // logIn
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
// logIn()
// async function logIn(){

//     return HttpService.post(`guide/`)
// }

async function checkCredentials(loginData) {
    try {
        const res = await Axios.post("http://localhost:3001/api/auth" + '/login', loginData)
        const user = res.data;
        // if (user) {
        //     // _saveLoggedin(user)
        // }
        return user

        return res.data.answer
    } catch (err) {
        throw err
    }
}

// function _saveLoggedin(user) {
//     storageService.store('loggedinUser', user)
// }