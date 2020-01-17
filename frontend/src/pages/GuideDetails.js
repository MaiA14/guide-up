import React, { Component } from 'react'
import quoryString from 'query-string'

export default class GuideDetails extends Component {
    state = {
        guides: [
            { name: 'Kelly Jones',  description:'about me', langugages:'Hebrew, English', _id: '123',city:'israel', imgUrl: ''},
            { name: 'Ben Yager', description:'about me',  langugages:'Hebrew, English', _id: '321',city:'paris', imgUrl: 'https://imgbbb.com/images/2020/01/16/paris.jpg'},
            { name: 'or',description:'about me', langugages:'Hebrew, English', _id: '323',city:'barcelona', imgUrl: 'https://imgbbb.com/images/2020/01/16/barceolna.jpg'},
            { name: 'puki', description:'about me',  langugages:'Hebrew, English',_id: '623',city:'new-york', imgUrl: 'https://imgbbb.com/images/2020/01/16/ny.jpg'},
            { name: 'puki', description:'about me',  langugages:'Hebrew, English',  _id: '654',city:'mexico', imgUrl: 'https://imgbbb.com/images/2020/01/16/mexico.jpg'}


        ]
    }

    componentWillMount() {
        // m guidiD = props.match.params.id
       const items = quoryString.parse(this.props.location.search)
        const guide = this.state.guides.find(guide => guide._id === items.guide_id)
        this.setState({ guide })
    }
    render() {
        console.log('render:', this.state.guide)
        return (

            <div>
                {this.state.guide &&
                <div>
                    <h1>{this.state.guide.name}</h1>
                    <div>{this.state.guide.city}</div>
                    <div>{this.state.guide.langugages}</div>
                    </div>
                }
            </div>
        )
    }
}
