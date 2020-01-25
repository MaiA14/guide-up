import HttpService from './HttpService.js'
import axios from 'axios';
export default {
    query,
    deleteUser,
    addUser,
    getUserById,
    editUser,
};
const url = "http://localhost:3001/api/user"
var Axios = axios.create({
    withCredentials: true
});

function query(filterBy = '') {
    return Axios.get(url).then(res => res.data)
}

function getUserById(userId) {
    return HttpService.get(`user/${userId}`)
}

function editUser(user,userId) {
    return HttpService.put(`user${userId}`, user).then(res => res.data);
}

function addUser(name, user) {
    return HttpService.post('user', user).then(res => res.data);
}

function deleteUser(userId) {
    return HttpService.delete(`user${userId}`).then(res => res.data);
}

