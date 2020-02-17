import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'


import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides, loadTags } from '../reducers/guide/actionGuide.js'
import MainSearch from '../cmps/MainSearch.js'
import Loading from '../cmps/Loading.js'
import Navbar from '../cmps/Navbar.js'
import { getIconTag } from '../service/guideService.js'
import GuideTags from '../cmps/GuideTags.js'
import TagsView from '../cmps/TagsView.js'
import Footer from '../cmps/Footer.js'

class FilteredGuideList extends Component {

    state = {
        filterBy: { city: '', avgRank: '', tags: '' },
        tags: getIconTag(),
        tagsCaption: [],
        // isSelected: false,
    }

    componentDidMount() {
        document.body.style.paddingTop = '60px'
        let items = queryString.parse(this.props.location.search)
        let newCityToFilter = items.city
        this.setState(prvState => ({
            filterBy: {
                ...prvState.filterBy,
                ['city']: newCityToFilter
            }
        }), () =>
            (this.props.loadGuides(this.state.filterBy)))
    }

    onSearch = (newCityToFilter) => {
        this.setState({ tags: getIconTag() })

        this.setState(prvState => ({
            filterBy: {
                ...prvState.filterBy,
                ['tags']: []
            }
        }))
        this.setState(prvState => ({
            filterBy: {
                ...prvState.filterBy,
                ['city']: newCityToFilter
            }
        }), () => (this.props.loadGuides(this.state.filterBy)))

    }

    onSubmitTags = () => {
        this.setState(prvState => ({
            filterBy: {
                ...prvState.filterBy,
                tags: this.state.tagsCaption
            }
        }), () =>
            (this.props.loadGuides(this.state.filterBy)))
    }

    onSelectTag = (ev) => {
        ev.stopPropagation()

        const tagChoose = ev.target.name
        const ans = this.state.tagsCaption.includes(tagChoose);
        const imgTag = this.state.tags[tagChoose].img;

        if (ans) {
            this.setState(prevState =>
                ({
                    tagsCaption: this.state.tagsCaption.filter(tag =>
                        tag !== tagChoose)
                }), () => console.log(this.state.tagsCaption))
            this.setState(prevState => ({
                tags: {
                    ...prevState.tags, [tagChoose]:
                        { img: imgTag, isSelected: false }
                }
            }))

        } else {
            this.setState(prevState => ({
                tagsCaption:
                    [...prevState.tagsCaption, tagChoose]
            }))
            this.setState(prevState =>
                ({
                    tags: {
                        ...prevState.tags, [tagChoose]:
                            { img: imgTag, isSelected: true }
                    }
                }))
        }
    }


    render() {
        const searchStyle = {
            containerStyle: {
                marginTop: '0px'
            },
            selectStyle: {
                border: '1px solid #ef8758'
            }
        }

        const iconStyle = {
            width: '25px'
        }

        const styleNavBar = {
            backgroundColor: '#537580'
        }

        if (this.props.isLoading) {
            return <Loading></Loading>
        }
        const iconClass = 'home-icon-style'
        return (
            <React.Fragment>
                <Navbar styleNavBar={styleNavBar} ></Navbar>

                <div className=" main-container">
                    <h1 className="filtered-guides-header">
                        {this.state.filterBy.city + '\'s guides'}</h1>
                    <h2 className="guides-short-content">
                        Find your guides, let them share with you
                        the insight on the city.
                     Enjoy from unforgettable trip</h2>
                    <div className="filtered-glist-container flex">
                        <MainSearch onSearch={this.onSearch} style={searchStyle}>
                        </MainSearch>
                        <TagsView tags={this.state.tags} onSelectTag={this.onSelectTag} onSubmitTags={this.onSubmitTags} filterByTag={this.filterByTag} ></TagsView>
                    </div>
                    <section className="cards-list">
                        {this.props.guides.map(guide => <GuidePreview key={guide._id}
                            guide={guide}></GuidePreview>)}
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
const mapPropsToProps = (state) => {

    return {
        guides: state.guides.guides,
        isLoading: state.system.isLoading,
    }
}

const mapDispatchToProps = {
    loadGuides
}
export default connect(
    mapPropsToProps,
    mapDispatchToProps
)(FilteredGuideList)