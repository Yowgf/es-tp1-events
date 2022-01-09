import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { default as useEvent } from '../../../hooks/useEvent'
import '../css/styles.css'

const EventsTable = (props) => {
    const [state, setState] = useState({
        events : 0,
        page : 0,
        numPages: 0,
        sorted : 'dateCres',
    })
    const { getEvents } = useEvent()
    const navigate = useNavigate()
    
    const eventsOnPage = 8
    const descLength = 115
    
    useEffect(() => {
        getEvents().then(events => {
            if (events === undefined) {
                throw "undefined events object"
            }
            events = events.events_list
            events.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt)) ? 1 : -1)
            setState({...state, events: events, numPages: events.length/eventsOnPage})
            console.log("Number of events on page:", eventsOnPage)
        }).catch(e => { 
            console.log("Failed to Load Data from Server:", e)
            setState({...state, events: []})
        })
    }, [])

    const EventClick = (eventId) => {
        navigate(`/event/${eventId}`)
    }

    const SortTable = (method) => {
        var events = state.events
        var sorted = state.sorted
        if(method === 'title'){
            console.log('Ordenando por Titulo')

            console.log(events[0])
            if(sorted === 'titleCres'){
                events.sort((a, b) => (a.name < b.name) ? 1 : -1)
                sorted = 'titleDes'

            }
            else{
                events.sort((a, b) => (a.name > b.name) ? 1 : -1)
                sorted = 'titleCres'
            }
        }
        else if(method === 'datetime'){
            console.log('Ordenando por Datetime')

            console.log(events[0])
            if(sorted === 'dateCres'){
                events.sort((a, b) => (new Date(a.createdAt) < new Date(b.createdAt)) ? 1 : -1)
                sorted = 'dateDes'

            }
            else{
                events.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt)) ? 1 : -1)
                sorted = 'dateCres'
            }
        }
        else if (method === 'latitude' || method === 'longitude' || method === 'user'
            || method === 'description' || method === 'category') {
            console.log(`Ordenado por ${method}`)

            if (sorted === `${method}Cres`) {
                events.sort((a, b) => (a[method] < b[method]) ? 1 : -1)
                sorted = `${method}Des`

            }
            else {
                events.sort((a, b) => (a[method] > b[method]) ? 1 : -1)
                sorted = `${method}Cres`
            }
        }

        setState({...state, events: events, sorted: sorted})
    }

    const renderTableData = (page) => {
        if(state.events !== 0 && state.events !== undefined){
            return Object.keys(state.events).slice(page * eventsOnPage, (page + 1) * eventsOnPage).map((event, index) => {
                var datetime = new Date(state.events[event]['createdAt']).toISOString()
                var aux = ""
                aux = datetime.slice(8,10) + "/" + datetime.slice(5,7) + "/" + datetime.slice(0,4)
                aux = aux + " as " + datetime.slice(11,16)
                datetime = aux
                const category = state.events[event]['category']
                var description = state.events[event]['description']
                if(description.length > descLength){
                    console.log("Desc grande")
                    description = description.slice(0, descLength) + "..."
                }
                const title = state.events[event]['name']
                const user = state.events[event]['user']
                const latitude = state.events[event]['latitude']
                const longitude = state.events[event]['longitude']
                console.log(state.events[event])
                console.log(description.length)
                console.log(descLength)
                return (
                    <tr key={state.events[event]['id']} onClick={() =>EventClick(state.events[event]['id'])}>
                        <td>{title}</td>
                        <td>{category}</td>
                        <td>{description}</td>
                        <td>{datetime}</td>
                        <td>{user}</td>
                        <td>{latitude}</td>
                        <td>{longitude}</td>
                    </tr>
                )
        })}
    
        return <></>
    }
      
    const renderTableHeader = () => {
        if(state.events !== 0){
            return (
                <Fragment>
                    <th key={"title"} onClick={() => SortTable('title')}>{"TITLE"}</th>
                    <th key={"category"} onClick={() => SortTable('category')}>{"CATEGORY"}</th>
                    <th key={"description"} onClick={() => SortTable('description')}>{"DESCRIPTION"}</th>
                    <th key={"datetime"} onClick={() => SortTable('datetime')}>{"DATE"}</th>
                    <th key={"user"} onClick={() => SortTable('user')}>{"USER"}</th>
                    <th key={"latitude"} onClick={() => SortTable('latitude')}>{"LATITUDE"}</th>
                    <th key={"longitude"} onClick={() => SortTable('latitude')}>{"LONGITUDE"}</th>
                </Fragment>
            )
        }
        return <></>
    }
  
    return (
        <div id="table">
            <h1 id='title'>Recent Events</h1>
            <table id='Events'>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData(state.page)}
                </tbody>
            </table>
            <button onClick={() => setState({...state, page: state.page - 1})} disabled={state.page === 0}>
                {' < '}
            </button>
            <button onClick={() => setState({...state, page: state.page + 1})} disabled={state.page >= state.numPages - 1}>
                {' > '}
            </button>
        </div>
    )
}

export default EventsTable
