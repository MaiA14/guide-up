import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'
import { Rating } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'


import Calendar from '../cmps/Calendar.js'
import { getGuide } from '../reducers/guide/actionGuide.js'
import Review from '../cmps/Review.js'
import Navbar from '../cmps/Navbar.js'
import ReviewView from '../cmps/Review-view.js'
import Loading from '../cmps/Loading.js'


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
        console.log(this.props.isLoading)
        if (this.props.isLoading) {
            return <Loading></Loading>
        }
        console.log('@@@@@@@@: ', this.props.guide.name)



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
                                <div className="guide-activites">
                                    {this.props.guide.pics.map(img => {
                                        return <img src={img} alt="" className="img-responsive" />
                                    })}
                                </div>
                                <div class="divider"></div>
                                <Review guide={this.onNewReview} ></Review>
                                <div className="num-of-reviews">
                                    Reviews ({this.props.guide.reviews.length})
                                </div>
                                {this.props.guide.reviews && this.props.guide.reviews.map(review => {
                                    return (
                                        <ReviewView review={review}></ReviewView>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="calendar-container">
                            <div className="calendar-content">
                                <Calendar></Calendar>
                                <div className="num-of-people">
                                    <h2>How many people?</h2>
                                </div>
                                <div className="book-btn-container">
                                    <input type="text" className="book-btn-container book-input"></input>
                                    <button className="book-btn">Book</button>
                                </div>
                                <div class="price-rank flex column justify-center">
                                    <div className="guide-price">${this.props.guide.price}  For my tour</div>
                                    <div className="guide-rank">
                                        <Icon size={'small'} disabled name='star' />{this.props.guide.avgRank}
                                    </div>
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
    console.log(state.guides.guide)
    return {

        guide: state.guides.guide,
        isLoading: state.system.isLoading

    }
}
const mapDispatchToProps = {
    getGuide,


}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuideDetails)

