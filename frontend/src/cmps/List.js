import React from 'react';
import ContryPreview from './ContryPreview.js'
import GuidePreview from './GuidePreview.js'
import { withRouter } from "react-router";


function List(props) {
    return (
        <React.Fragment>
                <h1 className="first-header-section">Popular tours</h1>
            <section>
                {props.countries.map(country => <ContryPreview key={country} country={country}></ContryPreview>)}
            </section>
            <h1 className="second-header-section">Popular guides</h1>
            <section className="cards-list">
                {props.guides.map(guide => <GuidePreview key={guide._id}  guide={guide}></GuidePreview>)}
            </section>
        </React.Fragment>
    )


}

export default withRouter(List)