import React, { Component } from "react";
import { connect } from 'react-redux'


import Header from '../cmps/Header.js'
import List from '../cmps/List.js'
import { loadGuides } from '../reducers/guide/actionGuide.js'
import Navbar from '../cmps/Navbar.js'


class LocalGuideApp extends Component {
    state = {
        countries: ['tel-aviv', 'paris', 'barcelona', 'new-york', 'mexico', 'berlin'],
        filterBy: {},
        styleNavBar: {
            backgroundColor: '',
            transition:'backgroundColor'
            
        }


    }
    componentDidMount() {
        this.props.loadGuides();
        document.body.style.paddingTop = 0

        window.onscroll = () => {
            let styleNavBar

            if (document.documentElement.scrollTop > 110) {
                styleNavBar = { backgroundColor: '#161f24',transition:' 0.8s' }
                this.setState({ styleNavBar })


            } else if (document.documentElement.scrollTop < 500)
                styleNavBar = { backgroundColor: '',transition:' 0.8s' }
            this.setState({ styleNavBar })

        }

    }

    render() {


        return (
            <div>
                <Navbar styleNavBar={this.state.styleNavBar}></Navbar>
                <Header ></Header>
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