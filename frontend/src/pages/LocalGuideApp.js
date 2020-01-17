import React, { Component } from "react";
import { connect } from 'react-redux'
import Header from '../cmps/Header.js'
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
            { name: 'Kelly Jones', description:'about me', country:'Hebrew, English', _id: '123',city:'israel', imgUrl: ''},
            { name: 'Ben Yager', description:'about me', langugages:'Hebrew, English',_id: '321',city:'paris', imgUrl: 'https://imgbbb.com/images/2020/01/16/paris.jpg'},
            { name: 'or',description:'about me', langugages:'Hebrew, English',_id: '323',city:'barcelona', imgUrl: 'https://imgbbb.com/images/2020/01/16/barceolna.jpg'},
            { name: 'puki', description:'about me', langugages:'Hebrew, English', _id: '623',city:'new-york', imgUrl: 'https://imgbbb.com/images/2020/01/16/ny.jpg'},
            { name: 'puki', description:'about me', langugages:'Hebrew, English',_id: '654',city:'mexico', imgUrl: 'https://imgbbb.com/images/2020/01/16/mexico.jpg'}


        ],
        countries: ['israel','paris','barcelona','new-york','mexico'],
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
            <div>
                <Header></Header>
            <section className="main-container">
                <List guides={this.state.guides} countries={this.state.countries}></List>
            </section>
            </div>
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
