import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class MainSearch extends Component {
    state = {
        city: ''

    }
    onChange = (ev) => {

        const city = ev.target.value;
        ev.target.value = city
        this.setState({ city })
    }

    onSearch = (ev) => {

        this.props.history.push(`/location/?city=${this.state.city}`)
    }

    render() {
        return (
            <div className="search-container flex" >
                <select value={this.state.city} onChange={this.onChange}>
                    <option value="" disabled selected>select your destination</option>

                    <option value="tel-aviv">Tel Aviv</option>
                    <option value="paris">Paris</option>
                    <option value="new-york">New York</option>
                    <option value="mexico">Mexico-city</option>
                    <option value="barcelona">Barcelona</option>
                </select>
                <button className="search-btn" onClick={this.onSearch}>Search</button>
            </div>
        )
    }
}

export default withRouter(MainSearch);
