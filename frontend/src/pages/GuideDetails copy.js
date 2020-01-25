import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'
import { Rating } from 'semantic-ui-react'
import Calendar from '../cmps/Calendar.js'
import { getGuide } from '../reducers/guide/actionGuide.js'
import Review from '../cmps/Review.js'
import Navbar from '../cmps/Navbar.js'
import ReviewView from '../cmps/Review-view.js'
import { Icon } from 'semantic-ui-react'

class GuideDetails extends Component {
    state = {
        bookClassName: 'absolute'
    }

    componentWillMount() {
        window.onscroll = () => {
            let bookClassName
            if (document.documentElement.scrollTop === 0) {

                bookClassName = 'absolute'
                this.setState({ bookClassName })
            } else {
                bookClassName = 'fixed'
                this.setState({ bookClassName })
            }
        }
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
            backgroundColor: '#161f24'
        }
        return (

            <React.Fragment>
                <Navbar styleNavBar={styleNavBar} ></Navbar>
                {this.props.guide &&
                    <div className="guide-details flex relative ">
                        <div className="context-container">
                            <div className="btn-container">
                                <button onClick={this.backToListOfGuids} className="back-btn">Back</button>
                            </div>
                            <h1 className="guide-header ">
                                {this.props.guide.name}
                            </h1>
                            <div className="guide-img-details">
                                <img src={this.props.guide.imgUrl} ></img>
                            </div>

                            <div className="guide-short-desc">
                                <h2>{this.props.guide.shortDescription}</h2>
                            </div>
                            <div className="guide-tags">
                                {
                                    this.props.guide.tags.map((tag, index) => {
                                        return (
                                            ((this.props.guide.tags.length - 1 > index)) ? <span>{tag + '  '}</span> : <span>{tag}</span>
                                        )
                                    })}
                            </div>
                            <div class="lang-from-guide">
                                <div className="from-guide">
                                    <div> From: {this.props.guide.city}</div>
                                </div>
                                <div className="guide-lang">
                                    <span>Langugages: </span>
                                    {
                                        this.props.guide.langugages.map((langugage, index) => {
                                            return (
                                                ((this.props.guide.langugages.length - 1 > index)) ? <span>{langugage + ' , '}</span> : <span>{langugage}</span>
                                            )
                                        })}
                                </div>
                            </div>
                            <div className="guide-desc">
                                {this.props.guide.description}
                            </div>

                            <Review guide={this.onNewReview} ></Review>
                            {this.props.guide.reviews && this.props.guide.reviews.map(review => {
                                return (
                                    <ReviewView review={review}></ReviewView>
                                )
                            })}

                        </div>
                        <div className="calendar-container">
                            <div className="calendar-content">
                                <Calendar></Calendar>
                                <div className="num-of-people">
                                    <h2>How many people?</h2>
                                </div>
                                <div class="price-rank flex column justify-center">
                                    <div className="guide-price">${this.props.guide.price}  For my tour</div>
                                    <div className="guide-rank">
                                        <Icon size={'small'} disabled name='star' />{this.props.guide.avgRank}
                                    </div>
                                </div>
                                <div className="book-btn-container">
                                    <input type="text" className="book-btn-container book-input"></input>
                                    <button className="book-btn">Book</button>
                                </div>
                            </div>
                        </div>

                    </div>

                }

            </React.Fragment>
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

