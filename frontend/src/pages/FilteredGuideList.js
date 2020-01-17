import React, { Component } from 'react'
import quoryString from 'query-string'

import GuidePreview from '../cmps/GuidePreview.js'


export default class GuideListFiltered extends Component {
    state = {
        guides: [
            { name: 'Kelly Jones', description:'about me', _id: '123', city: 'israel' },
            { name: 'Ben Yager', description:'about me',_id: '321',country:'paris', imgUrl: 'https://imgbbb.com/images/2020/01/16/paris.jpg'},

            { name: 'ben',  description:'about me', langugages:'Hebrew, English', _id: '321', city: 'paris' },
            { name: 'or',   description:'about me', langugages:'Hebrew, English',  _id: '323', city: 'barcelona' },
            { name: 'puki',  description:'about me', langugages:'Hebrew, English', _id: '623', city: 'new-york' },
            { name: 'puki',   description:'about me',langugages:'Hebrew, English', _id: '654', city: 'mexico' }
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
                <label class="container">Coffe</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Music</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Movies</label>

                <section className="cards-list main-container">
                    {this.state.filterGuides.map(guide => <GuidePreview key={guide._id} guide={guide}></GuidePreview>)}
                </section>
            </div>

        )
    }
}
