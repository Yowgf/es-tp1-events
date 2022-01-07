import { useEffect } from 'react'

import { default as useEvent } from '../../../hooks/useEvent'
import { default as Body } from '../../../components/Body'

import mapboxgl from "mapbox-gl";
import '../css/Map.css'
import '../../../errors/empty-list.css'


const createMap = () => {
    new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-43.9, -19.9],
        zoom: 12,
    });
}

const Map = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVvbmVsbW90YSIsImEiOiJja3k0ZmhmZWUwYmRzMnZwOGVzc3gzc3JtIn0._T-Ie9E_XOgWuGgLytYIAg';
    useEffect(() => {
        createMap()
    }, []);

    return (
        <Body>
            <div id="mapContainer" className="map-container"></div>
        </Body>
    )
}

export default Map
