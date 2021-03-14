import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoicmF3bWFueSIsImEiOiJja2xydnc4bGsxOWc4MnZudzIzNzcwZ3RrIn0.cPeNxQhokC9F52cHaO6Eow';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [55.75395, 37.63178], 
      zoom: 10 
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
    <div className="map-wrapper">
      <div data-testid="map" className="map" ref={this.mapContainer} />
    </div>
    );
  }
}