const logger = require('../../services/logger.service')
const reviewService = require('./review.service')
 
// TODO: needs error handling! try, catch

async function getReviews(req, res) {
    try {
        const reviews = await reviewService.query(req.query)
        var num =9;
        num.toLowerCase();
        res.send(reviews)
    } catch (err) {
        logger.error('Cannot get reviews', err);
        res.status(500).send({ error: 'cannot get reviews' })
        
    }
}

async function deleteReview(req, res) {
    await reviewService.remove(req.params.id)
    res.end()
}

async function addReview(req, res) {
    var review = req.body;
    review.byUserId = req.session.user._id;
    review = await reviewService.add(review)
    review.byUser = req.session.user;
    review.aboutUser = {} 
    res.send(review)
}

module.exports = {
    getReviews,
    deleteReview,
    addReview
}