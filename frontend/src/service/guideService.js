import HttpService from './HttpService.js'
import axios from 'axios';
export default {
    query,
    deleteGuide,
    getGuideById,
    save

};
const url = "http://localhost:3001/api/guides"
var Axios = axios.create({
    withCredentials: true
});


function query(filterBy = '') {
    return Axios.get(url).then(res => res.data)
}


function getGuideById(guideId) {
    return HttpService.get(`guides/${guideId}`)

}



// function editGuide(guide,guideId) {
//     return HttpService.put(`guides${guideId}`, guide).then(res => res.data);
// }

// function addGuide(name, guide) {
//     return HttpService.post('guides', guide).then(res => res.data);
// }

function save(guide,guideId) {

    if (guide._id)
        return HttpService.put(`guides/${guideId}`,guide)
    return HttpService.post(`guides,${guide}`)
}

function deleteGuide(guideId) {
    return HttpService.delete(`guides${guideId}`).then(res => res.data);
}
