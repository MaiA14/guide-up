import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import quoryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GuideTags from '../cmps/GuideTags.js'
import Loader from '../cmps/Loading.js'


const cardStyle = {
    marginTop: 0,
    maxWidth: '100%',
    margin: 0,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '290px',
    minHeight: 0,
    background: '#fff',
    padding: 0,
    border: 'none',
    borderadius: '.28571429rem 0 0',
    paddingLeft: '2px',
    paddingRight: '2px',
    lineHeight: 2,
    boxShadow: 'none'

}

const cursor = {
    cursor: "pointer",
    boxShadow: '0px 0px 0px 0.2px rgb(100,100,100)'
}

const imgStyle = {
    cursor: "pointer",
    height: '200px',
    objectFit: 'cover'
}
const icon = {
    cursor: null,
    color: 'rgb(255, 255, 6)'
}
const header = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '16px'
}

class GuidePreviewCard extends Component {

    onLink = () => {
        const { props } = this

        this.props.history.push(`/guides/?guide_id=${props.guide._id}`)

    }



    render() {


        const iconClass = 'home-icon-style'

        const { props } = this
        return (<Card style={cardStyle} >
            <Image onClick={this.onLink} style={imgStyle} src={props.guide.imgUrl} />
            <Card.Content onClick={this.onLink} style={cursor} >
                <Card.Header style={header} >
                    {props.guide.name}
                    <div className="container-extra">
                        <Icon size={'small'} disabled style={icon} name='star' />
                        {props.guide.avgRank}
                    </div>
                </Card.Header>
                {
                    props.guide.langugages.map((langugage, index) => {
                        return (
                            ((props.guide.langugages.length - 1 > index)) ? <span key={index}>{langugage + ' , '}</span> : <span key={index}>{langugage}</span>
                        )
                    })}
                <div className="container-tag">
                </div>
                <div className="container-data">
                    <span>From: {props.guide.city}</span>
                </div>
                <GuideTags iconClass={iconClass} guide={props.guide} ></GuideTags>
            </Card.Content>
        </Card >

        )
    }



}

export default withRouter(GuidePreviewCard);




