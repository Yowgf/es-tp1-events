
import { default as useEvent } from '../../../hooks/useEvent'
import React, { Component, useState, setState } from 'react'
import '../css/styles.css'


const GetEvents = async ()=>{
    const { getEvent } = useEvent()
    var a = await getEvent()
    return a
}

var events;
class EventsTable extends Component{
    constructor(props) {
        super(props)
        this.state = 0
     }
     async componentDidMount(){
        var events = await GetEvents()
        events = events.events_list
        this.setState(events)
     }

     EventClick(title){
         console.log(title)
     }
     renderTableData() {
        if(this.state != 0){
            return Object.keys(this.state).map((event, index) => {
                const datetime = this.state[event]['datetime']
                const category = this.state[event]['event_category']
                const description = this.state[event]['event_description']
                const title = this.state[event]['title']  //destructuring
                console.log(this.state[event])
                return (
                <tr key={title} onClick={() =>this.EventClick(title)}>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>{description}</td>
                    <td>{datetime}</td>
                </tr>
                )
            })}
        
        return ''
     }
      
    renderTableHeader() {
        if(this.state != 0){
            let header = Object.keys(this.state)
            header = Object.keys(this.state[header[0]])
            return (
                [<th key={"title"}>{"TITLE"}</th>,
                <th key={"category"}>{"CATEGORY"}</th>,
                <th key={"description"}>{"DESCRIPTION"}</th>,
                <th key={"datetime"}>{"DATE"}</th>]

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
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}


export default EventsTable
