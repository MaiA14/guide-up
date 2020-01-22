import HttpService from './HttpService.js'
import axios from 'axios';
export default {
    query,
    deleteGuide,
    getGuideById,
    save,
    addGuide
};
const url = "http://localhost:3001/api/guide"
var Axios = axios.create({
    withCredentials: true
});


function query(city ='') {
    console.log(city)
    let item =  HttpService.get(`guide?city=${city}`)
    console.log(item)
    return item


}

function getGuideById(guideId) {
    return HttpService.get(`guides/${guideId}`)
}

// function editGuide(guide,guideId) {
//     return HttpService.put(`guides${guideId}`, guide).then(res => res.data);
// }

function addGuide(name, guide) {
    return HttpService.post('guides', guide).then(res => res.data);
}

function save(guide, guideId) {

    if (guideId)
        return HttpService.put(`guides/${guideId}`, guide)
    return HttpService.post(`guides,${guide}`)
}

function deleteGuide(guideId) {
    return HttpService.delete(`guides${guideId}`).then(res => res.data);
}
