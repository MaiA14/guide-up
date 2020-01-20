import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'


import Calendar from '../cmps/Calendar.js'
import { getGuide } from '../reducers/guide/actionGuide.js'
import Review from '../cmps/Review.js'

class GuideDetails extends Component {

    componentWillMount() {
        const items = quoryString.parse(this.props.location.search)
        this.props.getGuide(items.guide_id);

  
    }
    backToListOfGuids = () => {

        this.props.history.goBack()

    }

    onNewReview = (ev) => {
        console.log(this.state)
        console.log('this.state')
        this.props.saveGuide(this.state)
    }
    render() {
        return (

            <div>
                {this.props.guide &&
                    <div>
                        <button onClick={this.backToListOfGuids} className="back-btn space">Back</button>
                        <h1 className="guide-header space">{this.props.guide.name}</h1>
                        <img src={this.props.guide.imgUrl} className="guide-img-details space" ></img>
                        <h2 className="guide-desc space">{this.props.guide.description}</h2>
                        <span className="space"> From: {this.props.guide.city}</span>
                        <span className="space">Langugages: {this.props.guide.langugages}</span>
                        <div className="calendar-warpper">
                            <div className="calendar-container">
                                <h2 className="calendar-header space">Pick a date</h2>
                                <Calendar></Calendar>
                                <h2 className="num-of-guests-header space">How many people?</h2>
                                <div className="flex column">
                                    <div><input type="text" className="num-of-guests space" placeholder="0"></input></div>
                                    <div><button className="book-btn">Book</button></div>
                                </div>
                            </div>
                        </div>
                        <Review guide={this.onNewReview} ></Review>
                        <div className="guide-reviews-title space">
                            {this.props.guide.reviews && this.props.guide.reviews.map(review => {
                                return (
                                    <div className="review-contaner" key={review.id}>
                                        <h1> {review.title}</h1>
                                        <h2> {review.txt}</h2>
                                        <h2> {review.createBy.createdAt}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        guide: state.guide
    }
}
const mapDispatchToProps = {
    getGuide,

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuideDetails)

