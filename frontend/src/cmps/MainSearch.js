import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import quoryString from 'query-string'


class MainSearch extends Component {
    state = {
        city: null

    }

    componentDidMount() {

        const city = quoryString.parse(this.props.location.search)
        this.setState({ ...city })


    }

    onChange = (ev) => {

        const city = ev.target.value;
        ev.target.value = city
        this.setState({ city })
    }

    onSearch = (ev) => {
        ev.stopPropagation()
        if (this.state.city) {
            this.props.history.push(`/location/?city=${this.state.city}`)

        }

    }

    render() {

        const selectStyle = {
            background: ""

        }
        return (
            <div className="search-container flex" >
                <select style={this.props.style} value={this.state.city} onChange={this.onChange}>
                    <option value="" disabled selected>{
                        this.state.city ?
                            this.state.city : 'select your destination'
                    }    </option>

                    <option value="tel-aviv">Tel Aviv</option>
                    <option value="paris">Paris</option>
                    <option value="new-york">New York</option>
                    <option value="mexico">Mexico-city</option>
                    <option value="barcelona">Barcelona</option>
                    <option value="berlin">berlin</option>

                </select>
                <button className="search-btn" onClick={this.onSearch}>Search</button>
            </div>
        )
    }
}

export default withRouter(MainSearch);
