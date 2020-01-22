const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    remove,
    getGuideById,
    update,
    query,
    add
};

async function query(filterBy) {

    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('guide')
    
    try {
        const guides = await collection.find(criteria).toArray();
        console.log(guides)

        return guides
    } catch (err) {
        console.log('ERROR: cannot find guides')
        throw err;
    }
}

async function getGuideById(guideId) {
    const collection = await dbService.getCollection('guide')
    try {
        const guide = await collection.findOne({ "_id": ObjectId(guideId) })
        return guide
    } catch (err) {
        console.log(`ERROR: cannot find guide ${guideId}`)
        throw err;
    }
}

async function update(id, guide) {
    const collection = await dbService.getCollection('guide')
    delete guide._id
    try {
        await collection.replaceOne({ "_id": ObjectId(id) }, { $set: guide })
        guide._id = id;
        return guide
    } catch (err) {
        console.log(`ERROR: cannot update guide ${guide._id}`)
        throw err;
    }
}

async function add(guide) {
    const collection = await dbService.getCollection('guide')
    try {
        await collection.insertOne(guide);
        return guide;
    } catch (err) {
        console.log(`ERROR: cannot insert guide`)
        throw err;
    }
}

async function remove(guideId) {
    const collection = await dbService.getCollection('guide')
    try {
        return await collection.deleteOne({ "_id": ObjectId(guideId) })
    } catch (err) {
        console.log(`ERROR: cannot remove guide ${guideId}`)
        throw err;
    }
}

// function _buildCriteria(filterBy) {

//     const criteria = {}
//     try {
//         if (filterBy.city) {

//         }

//     }

// }

function _buildCriteria(filterBy) {
    console.log(filterBy)
    let criteria = {}

    try {
        if (filterBy) {
            criteria.city = filterBy.city
        }

    } catch (err) {
        console.log(err)
    }

    // if (filterBy.wishedIds) {
    //     criteria._id = {
    //         $in: filterBy.wishedIds.map((id) => {
    //             return ObjectId(id)
    //         })
    //     }
    // }
    return criteria;
}
