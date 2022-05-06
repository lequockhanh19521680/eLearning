import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Banner.propTypes = {};

function Banner(props) {
  console.log(props.isContact);
  return (
    <div>
      <div className="banner">
        {/* video */}
        {!props.isContact ? (
          <video type="video/mp4" loop muted autoPlay>
            <source src="https://vod-progressive.akamaized.net/exp=1651979483~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F871%2F19%2F479358463%2F2150673879.mp4~hmac=4502fee9643438bd94c1c994bbbb1c391c675469611890c9d8d70ce1136a9bc1/vimeo-prod-skyfire-std-us/01/871/19/479358463/2150673879.mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="img-banner"
            src="https://reviewedu.net/wp-content/uploads/2021/09/2232cb90-60aa-43e9-9357-c7ec51f4d82b-1400x788.jpeg"
          />
        )}

        <div className="content">
          <h2>SIMPLE CODE</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
