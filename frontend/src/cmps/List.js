import React from 'react';
import ContryPreview from './ContryPreview.js'
import GuidePreview from './GuidePreview.js'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';


function List(props) {
    console.log(props.guides[0]._id)
    return (
        <React.Fragment>
            <section>
                {props.countries.map(country => <Link to={country} key={country}> <ContryPreview key={country+'1'} country={country}></ContryPreview></Link>)}
            </section>
            <section>
                {props.guides.map(guide => <Link  to={`/guides/${guide._id}`} key={guide._id}> <GuidePreview key={guide._id+'1'}  guide={guide}></GuidePreview></Link>)}
            </section>
        </React.Fragment>
    )


}

export default withRouter(List)