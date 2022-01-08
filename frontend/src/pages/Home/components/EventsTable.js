
import { default as useEvent } from '../../../hooks/useEvent'
import React, { Component } from 'react'
import '../css/styles.css'


const GetEvents = async ()=>{
    const { getEvents } = useEvent()
    return await getEvents()
}

class EventsTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
            events : 0,
            page : 0,
            numPages: 0,
            sorted : 'dateCres'
        }
        this.eventsOnPage = 8
        this.descLength = 115
     }
    async componentDidMount(){
        try{
            var events = await GetEvents()
            events = events.events_list
            events.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt)) ? 1 : -1)
            this.setState({events: events})
            this.setState({numPages:events.length/this.eventsOnPage})
            console.log(this.eventsOnPage)
        }
        catch(e){
            console.log("Failed to Load Data from Server")
            console.log(e)
            this.setState({events:[]})
        }
    }

    EventClick(title){
        console.log(title)
    }
    SortTable(method){
        var events = this.state.events
        if(method === 'title'){
            console.log('Ordenando por Titulo')

            console.log(events[0])
            if(this.state.sorted === 'titleCres'){
                events.sort((a, b) => (a.name < b.name) ? 1 : -1)
                this.setState({sorted:'titleDes'})

            }
            else{
                events.sort((a, b) => (a.name > b.name) ? 1 : -1)
                this.setState({sorted:'titleCres'})
            }
            this.setState({events:events})
        }
        else if(method === 'datetime'){
            console.log('Ordenando por Datetime')

            console.log(events[0])
            if(this.state.sorted === 'dateCres'){
                events.sort((a, b) => (new Date(a.createdAt) < new Date(b.createdAt)) ? 1 : -1)
                this.setState({sorted:'dateDes'})

            }
            else{
                events.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt)) ? 1 : -1)
                this.setState({sorted:'dateCres'})
            }
            this.setState({events:events})
        }
        else if (method === 'latitude' || method === 'longitude' || method === 'user'
            || method === 'description' || method === 'category') {
            console.log(`Ordenado por ${method}`)

            if (this.state.sorted === `${method}Cres`) {
                events.sort((a, b) => (a[method] < b[method]) ? 1 : -1)
                this.setState({ sorted: `${method}Des` })

            }
            else {
                events.sort((a, b) => (a[method] > b[method]) ? 1 : -1)
                this.setState({ sorted: `${method}Cres` })
            }
            this.setState({ events: events })
        }

    }
    renderTableData(page) {
        if(this.state.events !== 0){
            return Object.keys(this.state.events).slice(page * this.eventsOnPage, (page + 1) * this.eventsOnPage).map((event, index) => {
                var datetime = new Date(this.state.events[event]['createdAt']).toISOString()
                var aux = ""
                aux = datetime.slice(8,10) + "/" + datetime.slice(5,7) + "/" + datetime.slice(0,4)
                aux = aux + " as " + datetime.slice(11,16)
                datetime = aux
                const category = this.state.events[event]['category']
                var description = this.state.events[event]['description']
                if(description.length > this.descLength){
                    console.log("Desc grande")
                    description = description.slice(0, this.descLength) + "..."
                }
                const title = this.state.events[event]['name']
                const user = this.state.events[event]['user']
                const latitude = this.state.events[event]['latitude']
                const longitude = this.state.events[event]['longitude']
                console.log(this.state.events[event])
                console.log(description.length)
                console.log(this.descLength)
                return (
                <tr key={this.state.events[event]['id']} onClick={() =>this.EventClick(title)}>
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
    
        return ''
    }
      
    renderTableHeader() {
        if(this.state.events !== 0){
            return (
                [<th key={"title"} onClick={()=>this.SortTable('title')}>{"TITLE"}</th>,
                <th key={"category"} onClick={()=>this.SortTable('category')}>{"CATEGORY"}</th>,
                <th key={"description"} onClick={()=>this.SortTable('description')}>{"DESCRIPTION"}</th>,
                <th key={"datetime"} onClick={()=>this.SortTable('datetime')}>{"DATE"}</th>,
                    <th key={"user"} onClick={() => this.SortTable('user')}>{"USER"}</th>,
                    <th key={"latitude"} onClick={() => this.SortTable('latitude')}>{"LATITUDE"}</th>,
                    <th key={"longitude"} onClick={() => this.SortTable('latitude')}>{"LONGITUDE"}</th>]

            )
        }
        return ''
     }
  
     render() {
        return (
           <div id="table">
                <h1 id='title'>Recent Events</h1>
              <table id='Events'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData(this.state.page)}
                 </tbody>
                </table>
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
