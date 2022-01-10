import { useEffect } from 'react'

import { default as useEvent } from '../../../hooks/useEvent'
import { default as Body } from '../../../components/Body'
import { useNavigate } from 'react-router-dom'
import mapboxgl from "mapbox-gl";
import '../css/Map.css'
import '../../../errors/empty-list.css'

const randomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
}






const Map = (props) => {
    const { getEvents } = useEvent()
    const navigate = useNavigate()
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVvbmVsbW90YSIsImEiOiJja3k0ZmhmZWUwYmRzMnZwOGVzc3gzc3JtIn0._T-Ie9E_XOgWuGgLytYIAg';

    useEffect(() => {
        const map = createMap()
        getEvents().then(res => {
            console.log('res', res)
            if (res === undefined || res.events_list === undefined) {
                console.error("Invalid getEvent response from server:", res)
                return
            }
            return addEventsLayer(map, res.events_list)
        })
    }, [getEvents]);

    const EventClick = (eventId) => {
        navigate(`/event/${eventId}`)
    }


    const addEventsLayer = (map, eventList) => {
        // If events list is empty, we insert a message instead
        if (Object.keys(eventList).length === 0) {
            const mapDiv = document.getElementById("mapContainer")
            mapDiv.innerHTML =
                '<span class="empty-list-error">\
                    There are no registered events\
                </span>'
            return
        }

        const category2color = createLegend(eventList)

        eventList.forEach(event => {
            const newDiv = document.createElement('div')
            const newH3 = document.createElement('h3')
            const newP = document.createElement('p')
            const newA = document.createElement('a')
            newH3.innerText = event.name
            newP.innerText = event.description
            newA.innerText = "Mais informações"
            newDiv.appendChild(newH3)
            newDiv.appendChild(newP)
            newDiv.appendChild(newA)
            newA.addEventListener('click', (e) => {
                EventClick(event.id)
            });
            newA.style.color = "blue"

            new mapboxgl.Marker({
                color: category2color[event.category]
            })
                .setLngLat([event.longitude, event.latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 })
                        .setDOMContent(newDiv)
                )
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
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "top-right");
        return map
    }
    // create legend with the events' categories and a random generated color for each one
    const createLegend = (eventList) => {
        const categories = [...new Set(eventList.map(event => event.category))]
        let category2color = {}
        categories.forEach(category => {
            category2color[category] = randomColor();
        })
        const legend = document.getElementById('legend');
        Object.keys(category2color).forEach((category) => {
            const color = category2color[category]
            const item = document.createElement('div');
            const key = document.createElement('span');
            key.className = 'legend-key';
            key.setAttribute("style", "background-color:" + color);
            const value = document.createElement('span');
            value.innerHTML = `${category}`;
            item.appendChild(key);
            item.appendChild(value);
            legend.appendChild(item);
        });
        return category2color
    }

    return (
        <Body>
            <div style={{ height: "100%" }}>
            <div id="mapContainer" className="map-container"></div>
            <div class='map-overlay' id='legend'></div>
            </div>
        </Body>
    )
}

export default Map
