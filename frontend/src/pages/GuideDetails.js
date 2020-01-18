import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'


import Calendar from '../cmps/Calendar.js'
import { getGuide } from '../reducers/guide/actionGuide.js'

class GuideDetails extends Component {



    componentWillMount() {
        const items = quoryString.parse(this.props.location.search)
        this.props.getGuide(items.guide_id);


        // const guide = this.props.guides.find(guide => guide._id === items.guide_id)
        // this.setState({ guide })
    }
    render() {
        return (

            <div>
                {this.props.guide &&
                    <div>
                        <button className="back-btn space">Back</button>
                        <h1 className="guide-header space">{this.props.guide.name}</h1>
                        <img src={this.props.guide.imgUrl} className="guide-img-details space" ></img>
                        <h2 className="guide-desc space">{this.props.guide.description}</h2>
                        <span className="space"> From: {this.props.guide.city}</span>
                        <span className="space">Langugages: {this.props.guide.langugages}</span>
                        <div  className="Calendar-container">

                        <Calendar></Calendar>

                        </div>

                        <div className="guide-reviews-title space">Reviews(0):</div>

                    </div>
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
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

