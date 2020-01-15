import React, { Component } from 'react'

export default class GuideDetails extends Component {
    state = {
        guides: [
            { name: 'mai', _id: '123' },
            { name: 'ben', _id: '321' },
            { name: 'or', _id: '323' },
            { name: 'puki', _id: '623' }
        ],
        guide: {}
    }

    componentWillMount() {
        console.log('i am in detaile')
        console.log(this.props.match.params.id)
        const guide = this.state.guides.find(guide => guide._id === this.props.match.params.id)
        console.log(guide)
        this.setState({ guide })
    }
    render() {
        console.log('render:', this.state.guide)
        return (

            <div>
                {this.state.guide &&
                    <h1>{this.state.guide.name}</h1>
                }
            </div>
        )
    }
}
