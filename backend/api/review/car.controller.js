const logger = require('../../services/logger.service')
const carService = require('./car.service')
 
// TODO: needs error handling! try, catch

async function getCars(req, res) {
    console.log(req.query);
    try {
        const cars = await carService.query(req.query)
        res.send(cars)
    } catch (err) {
        logger.error('Cannot get cars', err);
        res.status(500).send({ error: 'cannot get cars' })
        
    }
}

async function deleteCar(req, res) {
    await carService.remove(req.params.id)
    res.end()
}

async function addCar(req, res) {
    var car = req.body;
    car.byUserId = req.session.user._id;
    car = await carService.add(car)
    car.byUser = req.session.user;
    car.aboutUser = {} 
    res.send(car)
}

module.exports = {
    getCars,
    deleteCar,
    addCar
}