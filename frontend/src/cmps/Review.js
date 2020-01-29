import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addReview } from '../reducers/guide/actionGuide.js'
import { getRandomID } from '../service/utilsService.js'
import RatingStar from './RatingStar.js'
import { Form, TextArea } from 'semantic-ui-react'

class Review extends Component {
    state = {
        id: getRandomID(),
        title: '',
        txt: '',
        createBy: {
            id: "6436373453",
            testName: "",
            fullName: "",
            imgUrl: "http://img.com"
        },
        created_at: Date.now(),
        rank: null,
    }

    onChangeRateStar = (rating) => {
        this.setState((prevState) => {
            return { ...prevState, ['rank']: rating }
        })
    }

    onChange = (ev) => {
        ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        if (field === 'userName') {
            this.setState(prevState => ({createBy: { ...prevState.createBy, [field]: value }}))
        } else {
            this.setState((prevState) => {
                return { ...prevState, [field]: value }
            })
        }
    }

    render() {
        return (
            <div>
                <h2 className="guide-review-title">Write a review about {this.props.guide.name}</h2>
                <div>
                    <input onChange={this.onChange} name="userName"
                        type="text" className="review-input" placeholder="user name"></input>
                </div>
                <div>

                    <Form className="review-text">
                        <TextArea rows={2} placeholder='What do you think about me?' onChange={this.onChange} name="txt" />
                    </Form>
                </div>
                <div>Rate</div>
                <div>
                    <RatingStar onChangeRateStar={this.onChangeRateStar}></RatingStar>
                </div>
                <button className="send-btn" onClick={() =>
                    this.props.addReview(this.state, this.props.guide)}>Send</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        guide: state.guides.guide
    }
}

const mapDispatchToProps = {
    addReview,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review)

