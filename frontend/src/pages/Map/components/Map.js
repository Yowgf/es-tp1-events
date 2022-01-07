import { useEffect } from 'react'

import { default as useEvent } from '../../../hooks/useEvent'
import { default as Body } from '../../../components/Body'

import mapboxgl from "mapbox-gl";
import '../css/Map.css'
import '../../../errors/empty-list.css'



const addEventsLayer = (map, eventList) => {
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    var mapDiv = document.getElementById("mapContainer")

    // If events list is empty, we insert a message instead
    if (Object.keys(eventList).length === 0) {
        mapDiv.innerHTML =
            '<span class="empty-list-error">\
                There are no registered events\
            </span>'
        return
    }

    eventList.forEach(event => {
        new mapboxgl.Marker()
            .setLngLat([event.longitude, event.latitude])
            .addTo(map)
    });
}

const createMap = () => {
    const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-43.96, -19.91],
        zoom: 12,
    });
    return map
}

const Map = () => {
    const { getEvent } = useEvent()

    mapboxgl.accessToken = 'pk.eyJ1IjoibGVvbmVsbW90YSIsImEiOiJja3k0ZmhmZWUwYmRzMnZwOGVzc3gzc3JtIn0._T-Ie9E_XOgWuGgLytYIAg';
    useEffect(() => {
        const map = createMap()
        getEvent().then(res => {
            console.log('res', res)
            if (res === undefined || res.events_list === undefined) {
                console.error("Invalid getEvent response from server:", res)
                return
            }
            return addEventsLayer(map, res.events_list)
        })
    }, [getEvent]);

    return (
        <Body>
            <div id="mapContainer" className="map-container"></div>
        </Body>
    )
}

export default Map
