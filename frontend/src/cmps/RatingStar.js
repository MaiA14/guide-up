import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'

export default class RatingStar extends Component {
    state = {
        rating: 0
    }

    handleRate = (e, { rating }) => {
        this.props.onChangeRateStar(rating)
    }

    render() {
        return (
            <div>
                <Rating onRate={this.handleRate} maxRating={5}  
                defaultRating={0} icon='star' size='massive' />
            </div>
        )
    }
}