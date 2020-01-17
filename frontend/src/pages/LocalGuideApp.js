import React, { Component } from "react";
import { connect } from 'react-redux'


import Header from '../cmps/Header.js'
import List from '../cmps/List.js'
import { loadGuids } from '../reducers/guide/actionGuide.js'


// import {loadTodos, removeTodo} from '../actions';

// import List from "../cmps/TodoList";
// import TodoFilter from "../cmps/TodoFilter";


class LocalGuideApp extends Component {
    state = {
        countries: ['israel', 'paris', 'barcelona', 'new-york', 'mexico'],
        filterBy: {}
    }
    componentDidMount() {

        this.props.loadGuids();

    }

    // setFilter = (filterBy) => {
    //     this.setState({ filterBy })
    // }

    render() {
        console.log(this.props.guides)
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
    loadGuids,

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocalGuideApp)
