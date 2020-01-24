import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'
import { Rating } from 'semantic-ui-react'
import Calendar from '../cmps/Calendar.js'
import { getGuide } from '../reducers/guide/actionGuide.js'
import Review from '../cmps/Review.js'
import Navbar from '../cmps/Navbar.js'
class GuideDetails extends Component {
    componentWillMount() {
        const items = quoryString.parse(this.props.location.search)
        this.props.getGuide(items.guide_id);

  

    }
    backToListOfGuids = () => {

        this.props.history.goBack()
    }
    onNewReview = (ev) => {
        this.props.saveGuide(this.state)
    }
    render() {
        const styleNavBar = {
            backgroundColor : '#161f24'
        }
        return (
            <div>
                <Navbar  styleNavBar={styleNavBar} ></Navbar>
                {this.props.guide &&
                    // <div>
                    //     <button onClick={this.backToListOfGuids} className="back-btn space">Back</button>
                    //     <h1 className="guide-header space">{this.props.guide.name}</h1>
                    //     <img src={this.props.guide.imgUrl} className="guide-img-details space" ></img>
                    //     <h2 className="guide-desc space">{this.props.guide.description}</h2>
                    //     <span className="space"> From: {this.props.guide.city}</span>
                    //     <span className="space">Langugages: {this.props.guide.langugages}</span>
                    //     <div className="calendar-warpper">
                    //         <div className="calendar-container">
                    //             <h2 className="calendar-header space">Pick a date</h2>
                    //             <div className="main-Calendar">
                    <div className="guide-details">
                        <div className="flex row">
                            <div>
                                <button onClick={this.backToListOfGuids} className="back-btn space">Back</button>
                                <h1 className="guide-header ">{this.props.guide.name}</h1>
                                <img src={this.props.guide.imgUrl} className="guide-img-details" ></img>
                                <h2 className="guide-desc space">{this.props.guide.shortDescription}</h2>
                                <div className="tags">     
                                      {
                        this.props.guide.tags.map((tag, index) => {
                            return (

                                ((this.props.guide.tags.length-1 > index)) ? <span>{tag + ' , '}</span> : <span>{tag}</span>
                            )


                        })}</div>
                                <div className="from-lang-container flex">  
                                <div> From: {this.props.guide.city} </div>
                               <div> Langugages:  {
                        this.props.guide.langugages.map((langugage, index) => {
                            return (

                                ((this.props.guide.langugages.length-1 > index)) ? <span>{langugage + ' , '}</span> : <span>{langugage}</span>
                            )


                        })}</div>
                        </div>
                            </div>
                            <div className="container-book">

                                <Calendar></Calendar>
                                
                            </div>
                        </div>
                      
                        <div className="flex row">
                            <div className="container-details">
                               <div>{this.props.guide.description}</div>
                          
                            </div>
                        </div>                      
                        <h1 className="guide-header space">Write a review about {this.props.guide.name}</h1>
                            <Review guide={this.onNewReview} ></Review>

                        <div className="guide-reviews-title space">
                            {this.props.guide.reviews && this.props.guide.reviews.map(review => {
                                return (
                                    <div className="review-contaner" key={review.id}>
                                        <h1>{review.title}</h1>
                                        <h2> {review.txt}</h2>
                                        <Rating disabled maxRating={5} defaultRating={review.rank} icon='star' size='massive' />
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
