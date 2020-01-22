import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addReview } from '../reducers/guide/actionGuide.js'
import { getRandomID } from '../service/utilsService.js'




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
                <div>
                    <input onChange={this.onChange} name="title" type="text" className="review-input" placeholder="Title"></input>
                </div>
                <div>
                    <input onChange={this.onChange} name="txt" type="text" className="review-input" placeholder="What do you think about me?"></input>
                </div>
                <div>Rate</div>
                <div>
                    <select onChange={this.onChange} name="rank">
                        <option value="" disabled selected> </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button className="send-btn" onClick={() => this.props.addReview(this.state, this.props.guide)}>Send</button>
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

