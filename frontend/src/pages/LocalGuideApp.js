import React, { Component } from "react";
import { connect } from 'react-redux'
import List from '../cmps/List.js'

// import {loadTodos, removeTodo} from '../actions';

// import List from "../cmps/TodoList";
// import TodoFilter from "../cmps/TodoFilter";

import {
    Link
} from "react-router-dom";
import GuideDetails from "./GuideDetails.js";


export default  class LocalGuideApp extends Component {
    state = {
        guides: [
            { name: 'mai', _id: '123',country:'israel', imgUrl: ''},
            { name: 'ben', _id: '321',country:'paris', imgUrl: ''},
            { name: 'or', _id: '323',country:'barcelona', imgUrl: ''},
            { name: 'puki', _id: '623',country:'new york', imgUrl: ''},
            { name: 'puki', _id: '654',country:'mexico', imgUrl: ''}


        ],
        countries: ['israel','paris','barcelona','new york','mexico'],
        filterBy: {}
    }
    componentDidMount() {

        // this.props.loadTodos();

    }

    setFilter = (filterBy) => {
        this.setState({ filterBy })
    }
    // todosToShow = () => {
    //     if (!this.state.filterBy.txt) return this.props.todos;
    //     return this.props.todos.filter(todo => todo.vendor.includes(this.state.filterBy.txt))
    // }
    render() {
        return (
            <section>
                <List guides={this.state.guides} countries={this.state.countries}></List>
            </section>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     }
// }
// const mapDispatchToProps = {
//     loadTodos,
//     removeTodo
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoApp)
