import React, { Component } from 'react'
import { connect } from 'react-redux'

import { saveGuide } from '../reducers/guide/actionGuide.js'
import { getRandomID } from '../service/utilsService.js'




class Review extends Component {
    state = {
        review: {
            title: '',
            createBy: {
                id: getRandomID(),
                title: "testingr",
                createBy: {
                    _id: "6436373453",
                    userName: "testName",
                    fullName: "testName",
                    imgUrl: "http://img.com"
                },
                createdAt: Date.now(),
                rank: null,
                txt: ''

            }
        }

    }

    onChange = (ev) => {
        ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        let review = this.state.review
        review[field] = value

        this.setState({ review })
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
                <button className="send-btn" onClick={() => this.props.saveGuide(this.state,this.props.guide._id)}>Send</button>
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
    saveGuide,

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review)

