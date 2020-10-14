import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapView extends Component {
    render() {
        return (
            <div className="my-2 pt-5" style={{ borderRadius: 4, border: '0.1px solid #cccccc', height: '400px', position: 'relative', bottom: '0', paddingBottom: '0%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map google={this.props.google}
                    zoom={18}
                    initialCenter={{ lat: 21.942670, lng: 96.107666 }} >
                    <Marker position={{ lat: 21.942670, lng: 96.107666 }} />
                </Map>
            </div>

        );
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAcWK8WHabUh0BMDZuIIPo0qfWXWarBzoo")
})(MapView)