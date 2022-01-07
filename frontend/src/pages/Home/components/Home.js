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
    table.classList.add('table')
    table.classList.add('table-striped')
    table.classList.add('table-bordered')
    table.classList.add('table-hover')

    // Create header of table
    var tableAttributes = ['id', 'name', 'description', 'category', 'createdAt', 'latitude', 'longitude', 'user']
    var headerThead = table.appendChild(document.createElement("thead"))
    var headerRow = headerThead.appendChild(document.createElement("tr"))
    tableAttributes.forEach(attribute => {
        if (attribute !== 'id') {
            var header = document.createElement("th")
            header.innerText = attribute
            headerRow.appendChild(header)  
        }
    })

    // And the body
    var tableBody = table.appendChild(document.createElement("tbody"))
    eventList.forEach(event => {
        var newRow = document.createElement("tr")
        tableAttributes.forEach(attribute => {
            if (attribute !== 'id') {
                var newTd = document.createElement("td")
                newTd.innerText = event[attribute]
                newRow.appendChild(newTd)
            }
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
