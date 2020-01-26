import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import quoryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';


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
    boxShadow:'none',
    paddingLeft: '2px',
    paddingRight: '2px',
    lineHeight : 2
}

const cursor = {
    cursor: "pointer"

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
       
        const { props } = this
        if(!props.guide.langugages && !props.guide.city){
            return <h1>loading</h1>
        }
        return (

            <Card style={cardStyle} >
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
                                ((props.guide.langugages.length-1 > index)) ? <span key={index}>{langugage + ' , '}</span> : <span key={index}>{langugage}</span>
                            )
                        })}
                    <div className="container-data">
                        <span>From: {props.guide.city}</span>
                    </div>
                </Card.Content>
            </Card >

        )
    }



}

export default withRouter(GuidePreviewCard);




