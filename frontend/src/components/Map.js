import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { useState } from 'react';
import "../css/map.css";


const Map = () => {

    const [viewPort, setViewPort] = useState({
        latitude: 28.60236,
        longitude: -81.20008,
        // width: '100vw',
        // height: '100vh',
        width: window.innerWidth,
        height: window.innerHeight,
        zoom: 14
    });

    return (
        <div id="map">
            
            <ReactMapGL
            
            mapboxApiAccessToken={"pk.eyJ1IjoiZWxyNDI0IiwiYSI6ImNrcXM5cGdvZTFtbjUybnFsZTF1N2c5bmkifQ.1e0zeu37TrBHe_TiqmjNVw"}
            mapStyle="mapbox://styles/elr424/ckqsacra23gy117r0j9otwx4x"
            // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            {...viewPort}
            onViewportChange={(newView) => setViewPort(newView)}
            >
                markers here
            </ReactMapGL>
        </div>
    )
}

export default Map
