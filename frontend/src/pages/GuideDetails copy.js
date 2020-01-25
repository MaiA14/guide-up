import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'
import { Rating } from 'semantic-ui-react'
import Calendar from '../cmps/Calendar.js'
import { getGuide } from '../reducers/guide/actionGuide.js'
import Review from '../cmps/Review.js'
import Navbar from '../cmps/Navbar.js'

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
                            <div class="lang-from-guide">
                            <div className="guide-from">
                                <div> From: {this.props.guide.city}</div>
                            </div>
    
                            <div className="guide-lang">
                                <div>Langugages: {this.props.guide.langugages}</div>
                            </div>
                            </div>
                    
                            <div className="contanier-Details">
                    
                                <div>{this.props.guide.description}</div>
                                <Review guide={this.onNewReview} ></Review>
                                
                            </div>
                        </div>
                        <div className="calendar-container">
                            <div className="calendar-content">
                                <Calendar></Calendar>
                                <div className="HowMany-people">
                                    <h2>How many people?</h2>
                                </div>
                                <select></select>
                                <div className="bookBtn-container">
                                    <button className="book-btn">book</button>
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

