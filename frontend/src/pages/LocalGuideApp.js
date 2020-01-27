import React, { Component } from "react";
import { connect } from 'react-redux'

import Loading from '../cmps/Loading.js'
import Header from '../cmps/Header.js'
import Footer from '../cmps/Footer.js'
import List from '../cmps/List.js'
import { loadGuides,setUserLogIn } from '../reducers/guide/actionGuide.js'
import Navbar from '../cmps/Navbar.js'
import storageService from '../service/storageService.js'

class LocalGuideApp extends Component {
    state = {
        countries: ['tel-aviv', 'paris', 'barcelona', 'new-york', 'mexico-city', 'berlin'],
        filterBy: {},
        styleNavBar: {
            backgroundColor: '',
            transition:'backgroundColor'   
        }
    }

    componentDidMount() {

        if(storageService.load('loggedinUser')){
            const user = storageService.load('loggedinUser')
            this.props.setUserLogIn(user)
        }


        this.props.loadGuides();
        document.body.style.paddingTop = 0

        window.onscroll = () => {
            let styleNavBar;
            if (document.documentElement.scrollTop > 110) {
                styleNavBar = { backgroundColor: '#161f24',transition:' 0.8s' }
                this.setState({ styleNavBar })
            } else if (document.documentElement.scrollTop < 500)
                styleNavBar = { backgroundColor: '',transition:' 0.8s' }
            this.setState({ styleNavBar })
        }
    }

    render() {

        
        if (this.props.isLoading) {
            return <Loading></Loading>
        }
        return (
            <div>
                <Navbar styleNavBar={this.state.styleNavBar}></Navbar>
                <Header ></Header>
                {
                    this.props.guides &&
                    <section className="main-container">
                        <List  guides={this.props.guides} countries={this.state.countries}></List>
                    </section>
                }
                <Footer ></Footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        guides: state.guides.guides,
        user:state.user,
        isLoading: state.system.isLoading,

    }
}

const mapDispatchToProps = {
    loadGuides,
    setUserLogIn
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocalGuideApp)