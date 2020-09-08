import React from "react";
import { withRouter } from "react-router";

import CityPreview from "./CityPreview.js";
import GuidePreview from "./GuidePreview.js";
import CityPreviewMobile from "./CityPreviewMobile.js";

function List(props) {
  return (
    <React.Fragment>
      <h1 className="first-header-section">Popular Destinations</h1>

      {props.isMobile ? (
        <CityPreviewMobile></CityPreviewMobile>
      ) : (
        <section className="city-list">
          {props.cities.map((city) => (
            <CityPreview key={city} city={city}></CityPreview>
          ))}{" "}
        </section>
      )}
      <h1 className="second-header-section">Popular guides</h1>
      <section className="cards-list">
        {props.guides.slice(0, 8).map((guide) => (
          <GuidePreview key={guide._id} guide={guide}></GuidePreview>
        ))}
      </section>
    </React.Fragment>
  );
}

export default withRouter(List);
