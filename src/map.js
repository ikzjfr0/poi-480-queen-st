import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithHover from './my_great_place_with_hover.jsx';

const AnyReactComponent = ({ text }) =>
  <div>
    {text}
  </div>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: -27.4645108, lng: 153.0298547 },
    zoom: 16
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <MyGreatPlaceWithHover
          lat={-27.4645108}
          lng={153.0298547}
          text={'EPC'} /* Kreyser Avrora */
        />
      </GoogleMapReact>
    );
  }
}
