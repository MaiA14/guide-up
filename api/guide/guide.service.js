const fs = require('fs')


module.exports = {
    remove,
    addguide,
    getGuideById,
    update,
    query
};


let gGuides =require('./data/guides.json')


function query(filterBy) {
    var res = gGuides;
    return Promise.resolve(res);
}
 


function getGuideById(guideId) {
 
    const guide = gGuides.find(guide => guide._id === guideId)
    if (guide)    return Promise.resolve(guide)
    else  return Promise.reject('wrong ID')
}

function update(id ,newGuide){
    let guide = gGuides.find(guide=>guide._id === id)
    let idx = gGuides.findIndex(guide=>guide._id === id)

    if (!guide) return Promise.reject('Wrong Id');
    let newGuideData = {...guide,...newGuide}


    guide = newGuideData

    _saveguidesToFile()

    return Promise.resolve(guide)
}
function addguide(guide) {
    const newguide = guide
    gGuides.push(newguide)
    _saveguidesToFile()

    return Promise.resolve(newguide)
}
 
function remove(guideId) {
    let guideIdx = gGuides.findIndex((currguide) => currguide.id === guideId)

    if (guideIdx === -1) return Promise.reject('Wrong Id');

    gGuides.splice(guideIdx , 1);

    _saveguidesToFile()
    return Promise.resolve(true)
}

// function getguides(filterBy) {
//     const guides = (!filterBy) ? 
//           gGuides
//         : gGuides.filter(guide => guide.name.includes(filterBy.name)
//                               && guide.numOfLegs === filterBy.numOfLegs);

//     return Promise.resolve(guides)
// }


function _saveguidesToFile() {
    fs.writeFile('backend\api\guide\data\guides.json', JSON.stringify(gGuides, null, 2) , ()=>{console.log('filllle');});
}

 


