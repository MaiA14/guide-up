import HttpService from './HttpService.js'
import axios from 'axios';
export default {
    query,
    deleteGuide,
    addGuide,
    getGuideById,
    editGuide,
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


function editGuide(guide,guideId) {
    return HttpService.put(`guides${guideId}`, guide).then(res => res.data);
}

function addGuide(name, guide) {
    return HttpService.post('guides', guide).then(res => res.data);
}

function deleteGuide(guideId) {
    return HttpService.delete(`guides${guideId}`).then(res => res.data);
}




// function getguideById(guideId){
//     return  axios.get('/guides/' +guideId)
// }

