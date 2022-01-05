import { useEffect } from 'react'

import { default as useEvent } from '../../../hooks/useEvent'
import { default as Body } from '../../../components/Body'

import '../css/Home.css'
import '../../../errors/empty-list.css'

const InjectEventsTable = (eventList) => {
    var listEventsDiv = document.getElementById("list-events")

    // First clean the element
    listEventsDiv.innerHTML = ""

    // If events list is empty, we insert a message instead
    if (Object.keys(eventList).length === 0) {
        listEventsDiv.innerHTML = 
        '<span class="empty-list-error">\
            There are no registered events\
        </span>'
        return
    }

    // Build and insert the table
    var table = listEventsDiv.appendChild(document.createElement("table"))

    // Create header of table
    var headerThead = table.appendChild(document.createElement("thead"))
    var headerRow = headerThead.appendChild(document.createElement("tr"))
    Object.keys(eventList[Object.keys(eventList)[0]]).forEach(key => {
        var header = document.createElement("th")
        header.innerText = key
        headerRow.appendChild(header)
    })

    // And the body
    var tableBody = table.appendChild(document.createElement("tbody"))
    Object.keys(eventList).forEach(id => {
        var eventObject = eventList[id]
        var newRow = document.createElement("tr")

        var valKeys = Object.keys(eventObject)
        
        // The first element of each row is special. We make it a
        // link to the details page describing the event.
        var newThKey = valKeys[0]
        var rowHeader = newRow.appendChild(document.createElement("th"))
        const detailsEndpoint = `/eventDetails/${id}`
        rowHeader.innerHTML = `<a href="${detailsEndpoint}">${eventObject[newThKey]}</a>`

        valKeys.slice(1, valKeys.length).forEach(key => {
            var newTd = document.createElement("td")
            newTd.innerText = eventObject[key]
            newRow.appendChild(newTd)
        })
        tableBody.appendChild(newRow)
    })
}

const Home = () => {
    const { getEvent } = useEvent()
    useEffect(() => {
        getEvent().then(res => {
            if (res === undefined || res.events_list === undefined) {
                console.error("Invalid getEvent response from server:", res)
                return
            }
            return InjectEventsTable(res.events_list)
        })
    }, [getEvent])

    return (
        <Body>
            <div id="list-events">
            </div>
        </Body>
    )
}

export default Home
