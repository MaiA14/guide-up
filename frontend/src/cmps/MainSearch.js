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



    render() {
        console.log(this.props)
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

                    <option value="tel-aviv">tel-aviv</option>
                    <option value="paris">paris</option>
                    <option value="new-york">new-york</option>
                    <option value="mexico">mexico</option>
                    <option value="barcelona">barcelona</option>
                </select>
                <button className="search-btn" onClick={() => {
                    this.props.onSearch(this.state.city)


                }
                }>Search</button>
            </div>
        )
    }
}

export default withRouter(MainSearch);
