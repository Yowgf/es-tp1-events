
import { default as useEvent } from '../../../hooks/useEvent'
import React, { Component, useState, setState } from 'react'
import '../css/styles.css'


const GetEvents = async ()=>{
    const { getEvent } = useEvent()
    var a = await getEvent()
    return a
}

class EventsTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
            events : 0,
            page : 0,
            numPages: 0
        }
        this.eventsOnPage = 8
        this.descLength = 115
     }
     async componentDidMount(){
        try{
            var events = await GetEvents()
            events = events.events_list
            this.setState({events: events})
            this.setState({numPages:events.length/this.eventsOnPage})
        }
        catch(e){
            console.log("Failed to Load Data from Server")
            this.setState({events:[]})
        }
     }

     EventClick(title){
         console.log(title)
     }
     renderTableData(page) {
        if(this.state.events !== 0){
            console.log(page)
            return Object.keys(this.state.events).slice(page * this.eventsOnPage, (page + 1) * this.eventsOnPage).map((event, index) => {
                var datetime = this.state.events[event]['createdAt']
                var aux = ""
                aux = datetime.slice(8,10) + "/" + datetime.slice(5,7) + "/" + datetime.slice(0,4)
                aux = aux + " as " + datetime.slice(11,datetime.length)
                datetime = aux
                const category = this.state.events[event]['category']
                var description = this.state.events[event]['description']
                if(description.length > this.descLength){
                    console.log("Desc grande")
                    description = description.slice(0, this.descLength) + "..."
                }
                const title = this.state.events[event]['name']
                const user = this.state.events[event]['user']
                console.log(this.state.events[event])
                console.log(description.length)
                console.log(this.descLength)
                return (
                <tr key={title} onClick={() =>this.EventClick(title)}>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>{description}</td>
                    <td>{datetime}</td>
                    <td>{user}</td>
                </tr>
                )
            })}
        
        return ''
     }
      
    renderTableHeader() {
        if(this.state.events !== 0){
            let header = Object.keys(this.state)
            header = Object.keys(this.state[header[0]])
            return (
                [<th key={"title"}>{"TITLE"}</th>,
                <th key={"category"}>{"CATEGORY"}</th>,
                <th key={"description"}>{"DESCRIPTION"}</th>,
                <th key={"datetime"}>{"DATE"}</th>,
                <th key={"datetime"}>{"USER"}</th>]

            )
        }
        return ''
     }
  
     render() {
        return (
           <div id="table">
              <h1 id='title'>Eventos Recentes</h1>
              <table id='Events'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData(this.state.page)}
                 </tbody>
              </table>,
              <button onClick={() => this.setState({page: this.state.page - 1})} disabled={this.state.page === 0}>
                {' < '}
              </button>
              <button onClick={() => this.setState({page: this.state.page + 1})} disabled={this.state.page >= this.state.numPages - 1}>
                {' > '}
              </button>
           </div>
        )
     }
}


export default EventsTable
