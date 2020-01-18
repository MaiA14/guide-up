import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'

import { getGuide } from '../reducers/guide/actionGuide.js'


class GuideDetails extends Component {

    state = {

        guide:null

    }


    componentWillMount() {

     

        const items = quoryString.parse(this.props.location.search)
        this.props.getGuide( items.guide_id);
        console.log(this.props.guide)


        // const guide = this.props.guides.find(guide => guide._id === items.guide_id)
        // this.setState({ guide })
    }
    render() {
        return (

            <div>
                {this.props.guide &&
                    <div>
                        <h1>{this.props.guide.name}</h1>
                        <div>{this.props.guide.city}</div>
                        <div>{this.props.guide.langugages}</div>
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

