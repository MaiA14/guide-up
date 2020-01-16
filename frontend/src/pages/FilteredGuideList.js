import React, { Component } from 'react'
import quoryString from 'query-string'

import GuidePreview from '../cmps/GuidePreview.js'


export default class GuideListFiltered extends Component {
    state = {
        guides: [
            { name: 'mai', _id: '123', city: 'israel' },
            { name: 'muki', _id: '845', city: 'israel' },

            { name: 'ben', _id: '321', city: 'paris' },
            { name: 'or', _id: '323', city: 'barcelona' },
            { name: 'puki', _id: '623', city: 'new york' },
            { name: 'puki', _id: '654', city: 'mexico' }
        ],
        filterGuides: ['hhh']
    }


    componentWillMount() {
        const items = quoryString.parse(this.props.location.search)
        console.log(this.state.guides[1].city)

        const filterGuides = this.state.guides.filter(guides => guides.city === items.city)
        console.log(filterGuides)
        this.setState({ filterGuides })
    }


    render() {
        return (
            <div>
                <section className="cards-list">
                    {this.state.filterGuides.map(guide => <GuidePreview key={guide._id} guide={guide}></GuidePreview>)}
                </section>
            </div>
        )
    }
}
