import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

 class MainSearch extends Component {


    onChange = (ev) => {

        this.props.history.push(`/location/?city=${ev.target.value}`)


    }

    render() {
        return (


            <div className="search-container flex">
                <select onChange={this.onChange} className="main-search flex">
                    <option value="london">London</option>
                    <option value="paris">Paris</option>
                    <option value="rome">Rome</option>
                    <option value="berlin">Berlin</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="israel">israel</option>
                   <option value="barcelona">Barcelona</option>
                </select>
                <button className="search-btn">Search</button>
            </div>
        )
    }
}

export default withRouter(MainSearch);
