import React, { Component } from "react";
import { connect } from 'react-redux'

import Header from '../cmps/Header.js'
import List from '../cmps/List.js'
import { loadGuides } from '../reducers/guide/actionGuide.js'

class LocalGuideApp extends Component {
    state = {
        countries: ['tel-aviv', 'paris', 'barcelona', 'new-york', 'mexico'],
        filterBy: {}
    }
    componentDidMount() {

        this.props.loadGuides();

    }

    render() {
        return (
            <div>
                <Header></Header>
                {
                    this.props.guides &&
                    <section className="main-container">
                        <List guides={this.props.guides} countries={this.state.countries}></List>
                    </section>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        guides: state.guides
    }
}
const mapDispatchToProps = {
    loadGuides,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocalGuideApp)
