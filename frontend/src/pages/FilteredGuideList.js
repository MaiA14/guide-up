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
            { name: 'puki', _id: '623', city: 'new-york' },
            { name: 'puki', _id: '654', city: 'mexico' }
        ],
        filterGuides: []
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
                <h1 className="filtered-guides-header space">Guides</h1>
                choose tags:<input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Art</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Art</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Art</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Art</label>

                <section className="cards-list main-container">
                    {this.state.filterGuides.map(guide => <GuidePreview key={guide._id} guide={guide}></GuidePreview>)}
                </section>
            </div>

        )
    }
}
