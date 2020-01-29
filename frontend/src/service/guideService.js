import axios from 'axios';

import HttpService from './HttpService.js'
import storageService from './storageService.js'
import { Comment, Icon } from 'semantic-ui-react'

export default {
    query,
    deleteGuide,
    getGuideById,
    save,
    addGuide,
    addReview,
    checkCredentials,   
}

const url = "http://localhost:3001/api/guide"
var Axios = axios.create({
    withCredentials: true
});

function query(filterBy='') {
    let item = HttpService.get(`guide?city=${filterBy.city}&avgRank=${filterBy.avgRank}`)
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
        let rank = +currRank.rank
        return acc + rank;
    }, 0)
    return (guideRank / guide.reviews.length).toFixed(1);
}

export  function getIconTag() {
     const tag = {
        Coffee:   'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580126710/nx4zhbrtkfp5vybo2tvt.png' ,  
        Outdoor: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580126496/lvydnjcii7euhydeh8bi.png',
        Shopping: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580125153/musi4qk4n11vu1v2xcyp.png',
        Culture: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580126878/mcjofjlxdzma6w9grpgj.png',
        Sport: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580126246/uyzc16yl35u5j0pakrgq.png',
        Food: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580125925/c4328sfxfhtobbhmeux3.png',
        Music: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580124661/j4hs3vgcfjok0xsuffj4.png',
        Art: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580125416/e7ncfe3ogdaeoajh83lx.png',
        Photos: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580126652/zeuynhclnuotvd5oat0s.png',
        NightLife: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1580125337/bjkqdxjjv2ifwrp4o9cz.png'
    }
    return tag
}

async function checkCredentials(loginData) {
    try {
        const res = await Axios.post("http://localhost:3001/api/auth" + '/login', loginData)
        const user = res.data;
        // if (user) {
        //     // _saveLoggedin(user)
        // }
        if (user) {
            // _saveLoggedin(user)
        }
        return user

        return res.data.answer
    } catch (err) {
        throw err
    }
}

// function _saveLoggedin(user) {
//     storageService.store('loggedinUser', user)
// }