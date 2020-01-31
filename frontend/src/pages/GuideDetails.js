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
import GuideTags from '../cmps/GuideTags.js'
import Footer from '../cmps/Footer.js'
import Chat from '../cmps/Chat.js'

class GuideDetails extends Component {
    state = {
        bookClassName: 'absolute'
    }

    componentDidMount() {
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
            backgroundColor: '#537580'
        }
        if (this.props.isLoading) {
            return <Loading></Loading>
        }

        const tagStyle = {
            width: '10%;',
            height: '100%;'
        }
        const iconClass = 'details-icon-style'

        return (
            <React.Fragment>
                <Navbar styleNavBar={styleNavBar} ></Navbar>
                {this.props.guide &&
                    <div className="guide-details flex relative ">
                        <div className="context-container">
                            <div className="btn-container">
                                <button onClick={this.backToListOfGuids}
                                 className="back-btn">Back</button>
                            </div>
                            <h1 className="guide-header ">
                                {this.props.guide.name}
                            </h1>
                            <div className="guide-short-desc">
                                <div>{this.props.guide.shortDescription}</div>
                            </div>
                            <div className="guide-img-details">
                                <img src={this.props.guide.imgUrl} ></img>
                            </div>
                            <div className="guide-rank">
                                        <Icon size={'small'} 
                                        disabled name='star' />{this.props.guide.avgRank} (by {this.props.guide.reviews.length} reviewers)
                                    </div>
                            <div className="guide-tags">
                            <GuideTags iconClass={iconClass} 
                            guide={this.props.guide}></GuideTags>
                            </div>
                            <div className="lang-from-guide">
                                <div className="from-guide">
                                    <span className="guide-field-title">
                                         From: &nbsp;</span><span>{this.props.guide.city}
                                         </span>
                                </div>
                                <div className="guide-lang">
                                    <span className="guide-field-title">Languages: &nbsp;
                                     </span>
                                    {
                                        this.props.guide.langugages.map((langugage, index)=>
                                         {
                                            return (
                                                ((this.props.guide.langugages.length - 1 >
                                                     index)) ? <span>{langugage + ' , '}
                                                     </span> : <span>{langugage}</span>
                                            )
                                        })}
                                </div>
                            </div>

                            <div className="guide-desc">
                                {this.props.guide.description}
                                <div className="guide-activites">
                                    {this.props.guide.pics.map(img =>  {  
                                        return <img src={img} alt="guide-img" 
                                        className="img-responsive" />
                                    })}
                                </div>
                                <div className="divider"></div>
                                <Review guide={this.props.guide} 
                                onNewReview={this.onNewReview} ></Review>
                                <div className="num-of-reviews">
                                    Reviews ({this.props.guide.reviews.length})
                                </div>
                                {this.props.guide.reviews &&
                                 this.props.guide.reviews.map(review => {
                                    return (
                                        <ReviewView review={review} key={this.props.guide._id}></ReviewView>
                                    )
                                })}
                            </div>
                        </div>
                     
                        <div className="calendar-container">
                       
                            <div className="calendar-content">
                            <div className="calendar-title">
                                    <h2>Pick a date</h2>
                                </div>
                                <Calendar></Calendar>
                                <div className="num-of-people">
                                    <h2>How many people?</h2>
                                </div>
                                <div className="book-btn-container">
                                    <input type="number"className="book-btn-container 
                                    book-input" placeholder="0"></input>
                                    <button className="book-btn">Book</button>
                                </div>
                                <div className="price-rank flex column justify-center">
                                    <div className="guide-price">${this.props.guide.price}  For my tour</div>
                                    <div className="container-chet">
                                    <Chat guide={this.props.guide}></Chat>
                                    </div>
                               
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                }
    <Footer ></Footer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
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

