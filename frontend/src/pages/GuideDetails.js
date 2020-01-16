import React, { Component } from 'react'
import quoryString from 'query-string'

export default class GuideDetails extends Component {
    state = {
        guides: [
            { name: 'mai', _id: '123',country:'israel' },
            { name: 'ben', _id: '321',country:'paris'  },
            { name: 'or', _id: '323',country:'barcelona'  },
            { name: 'puki', _id: '623',country:'new york'  },
            { name: 'puki', _id: '654',country:'mexico'}


        ]
    }


    componentWillMount() {
       const items = quoryString.parse(this.props.location.search)
        const guide = this.state.guides.find(guide => guide._id === items.guide_id)
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
