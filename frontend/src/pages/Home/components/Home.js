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
        if (key !== 'id') {
            var header = document.createElement("th")
            header.innerText = key
            headerRow.appendChild(header)  
        }
    })

    // And the body
    var tableBody = table.appendChild(document.createElement("tbody"))
    Object.keys(eventList).forEach(key => {
        var val = eventList[key]
        var newRow = document.createElement("tr")
        Object.keys(val).forEach(key => {
            if (key !== 'id') {
                var newTd = document.createElement("td")
                newTd.innerText = val[key]
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
