import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addReview } from '../reducers/guide/actionGuide.js'
import { getRandomID } from '../service/utilsService.js'
import RatingStar from './RatingStar.js'

class Review extends Component {
    state = {
        id: getRandomID(),
        title: '',
        txt: '',
        createBy: {
            id: "6436373453",
            userName: "testName",
            fullName: "testName",
            imgUrl: "http://img.com"
        },
        created_at: Date.now(),
        rank: null,
    }

    onChangeRateStar = (rating)=>{
        this.setState((prevState) => {
            return { ...prevState.reviews, ['rank']: rating }
        })   
    }

    onChange = (ev) => {
        ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        this.setState((prevState) => {
            return { ...prevState.reviews, [field]: value }
        })
    }

    render() {
        return (
            <div>
                <h2 className="guide-review-title">Write a review about {this.props.guide.name}</h2>
                <div>
                    <input onChange={this.onChange} name="title" 
                    type="text" className="review-input" placeholder="Title"></input>
                </div>
                <div>
                    <input onChange={this.onChange} name="txt" 
                    type="text" className="review-input" 
                    placeholder="What do you think about me?"></input>
                </div>
                <div>Rate</div>
                <div>
                    <RatingStar  onChangeRateStar={this.onChangeRateStar}></RatingStar>
                </div>
                <button className="send-btn" onClick={() => 
                    this.props.addReview(this.state, this.props.guide)}>Send</button>
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
    addReview,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review)

