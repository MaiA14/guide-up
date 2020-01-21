const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    remove,
    add,
    getById,
    update,
    query
};

async function query(filterBy = {}) {
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find().toArray();
        users.forEach(user => delete user.password);
        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({"_id":ObjectId(userId)})
        return user
    } catch (err) {
        console.log(`ERROR: cannot find user ${userId}`)
        throw err;
    }
}

async function update(id,user) {
    const collection = await dbService.getCollection('user')
    delete user._id
    try {
        await collection.replaceOne({"_id":ObjectId(id)}, {$set : user})
        user._id = id;
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection('user')
    try {
        return await collection.deleteOne({"_id":ObjectId(userId)})
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}