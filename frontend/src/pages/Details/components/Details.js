import { Fragment } from 'react'
import { useParams, useNavigate } from 'react-router'
import { AiFillEdit, AiFillDelete, AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { default as useEvent } from '../../../hooks/useEvent'
import { useEffect } from 'react'
import '../css/Details.css'
import mapboxgl from "mapbox-gl";

const max = (x, y) => { return x > y ? x : y }

const createMap = (latitude, longitude) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVvbmVsbW90YSIsImEiOiJja3k0ZmhmZWUwYmRzMnZwOGVzc3gzc3JtIn0._T-Ie9E_XOgWuGgLytYIAg';
    const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 12,
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
    return map
}

const addEventMarkerMap = (latitude, longitude, map) => {
    new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map)

}

const Details = () => {
    const { id } = useParams()
    console.log(id)

    const navigate = useNavigate()
    const previousEvent = () => {
        navigate(`/event/${max(id - 1, 1)}`)
    }
    const nextEvent = () => {
        navigate(`/event/${Number(id) + 1}`)
    }


    const { getEvent } = useEvent()
    useEffect(() => {
        getEvent(id).then(res => {
            console.log('res', res)
            if (res === undefined) {
                console.error("Invalid getEvent response from server:", res)
                return
            }
            else {
                const map = createMap(res.latitude, res.longitude)
                addEventMarkerMap(res.latitude, res.longitude, map)
                document.getElementById("eventName").innerText = res.name
                document.getElementById("eventCategory").innerText = res.category
                document.getElementById("eventDescription").innerText = res.description
                document.getElementById("eventDate").innerText = res.createdAt
                document.getElementById("eventLatitude").innerText = res.latitude
                document.getElementById("eventLongitude").innerText = res.longitude
                document.getElementById("eventUser").innerText = res.user
            }
        })
    }, [getEvent]);

    return (
        <Fragment>
            <h1 id='title' style={{ textAlign: 'center' }}>Event's Information</h1>
            <div className="event-detail-body" class="row event-detail-body">

                <div class="col-md-6">
                    <div class="table-responsive">
                        <table class="table table-user-information">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>
                                            <span class="glyphicon glyphicon-user  text-primary"></span>
                                        Name
                                    </strong>
                                    </td>
                                    <td class="text-primary" id="eventName"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            <span class="glyphicon glyphicon-calendar text-primary"></span>
                                        Category
                                    </strong>
                                    </td>
                                    <td class="text-primary" id="eventCategory"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            <span class="glyphicon glyphicon-calendar text-primary"></span>
                                        Created At
                                    </strong>
                                    </td>
                                    <td class="text-primary" id="eventDate"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            <span class="glyphicon glyphicon-calendar text-primary"></span>
                                        User
                                    </strong>
                                    </td>
                                    <td class="text-primary" id="eventUser"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            <span class="glyphicon glyphicon-calendar text-primary"></span>
                                        Latitude
                                    </strong>
                                    </td>
                                    <td class="text-primary" id="eventLatitude"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            <span class="glyphicon glyphicon-calendar text-primary"></span>
                                        Longitude
                                    </strong>
                                    </td>
                                    <td class="text-primary" id="eventLongitude"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            <span class="glyphicon glyphicon-calendar text-primary"></span>
                                        Description
                                    </strong>
                                    </td>
                                    <td class="text-primary" id="eventDescription"></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="icones" >
                        <AiOutlineCaretLeft size={20} onClick={() => previousEvent()} />
                        <AiFillEdit size={20} />
                        <AiFillDelete size={20} />
                        <AiOutlineCaretRight size={20} onClick={() => nextEvent()} />
                    </div>
                </div>

                <div class="col-md-6">
                    <strong>Location</strong>
                    <div id="mapContainer" className="map-container-details-page"></div>
                </div>

            </div>
        </Fragment >
    );
}

export default Details
