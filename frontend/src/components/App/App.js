import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Fragment } from 'react'
import { default as ExpressClient } from '../../clients/express'

import './App.css'

const useEvent = () => {
	const expressClient = new ExpressClient()

	const wrapEvent = eventDescription => {
		return {
			"datetime": "", // TODO: get current datetime -- aholmquist 2021-10-31
			"category": "all", // TODO: category should be input from user -- aholmquist 2021-10-31
			"event_description": eventDescription
		}
	}

	// TODO: the implementation below is just a prototype
	const getEvent = async () => {
		try {
			var res = await expressClient.getEvent().then(res => res.data)
			var listOfEvents = res.events_list
			var listEventsDiv = document.getElementsByClassName("list-events")[0]
			var table = listEventsDiv.appendChild(document.createElement("table"))

			// Create header of table
			var headerRow = document.createElement("tr")
			Object.keys(listOfEvents[Object.keys(listOfEvents)[0]]).forEach(key => {
				var header = document.createElement("td")
				header.innerText = key
				headerRow.appendChild(header)
			})
			table.appendChild(headerRow)

			// Now the rest of the rows
			Object.keys(listOfEvents).forEach(key => {
				var val = listOfEvents[key]
				var newRow = document.createElement("tr")
				Object.keys(val).forEach(key => {
					var newTd = document.createElement("td")
					newTd.innerText = val[key]
					newRow.appendChild(newTd)
				})
				table.appendChild(newRow)
			})
		} catch(e) {
			// TODO: should instead use lodash to log message -- aholmquist 2021-10-31
			console.log("Error when getting event")
		}
	}

	const postEvent = async eventDescription => {
		const eventObj = wrapEvent(eventDescription)
		try {
			return await expressClient.postEvent(eventObj).then(res => res)
		} catch(e) {
			// TODO: should instead use lodash to log message -- aholmquist 2021-10-31
			console.log("Error when posting event")
		}
	}

	return {
		expressClient,
		getEvent,
		postEvent,
	}
}

const App = () => {
	// Event API hooks
	const { expressClient, getEvent, postEvent } = useEvent()

	// Form hooks
	const {
		register,
		handleSubmit
	  } = useForm({
		defaultValues: {
			eventDescription: '',
		},
		mode: 'onChange',
	  })
	const onSubmit = async eventDescription => {
		console.log(`Requesting submission with '${eventDescription}'`)
		await postEvent(eventDescription)
		document.getElementsByClassName("list-events")[0].innerText = eventDescription.eventDescription
	}

	return (
		<Fragment>
			<div className="header">
			</div>
			<div className="events-body">
				<div>
					<form
						className="register-event"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input className="event-description" {...register("eventDescription")}/>  
						<Button
							className="register-button"
							size="small"
							variant="contained"
							color="primary"
							type="submit"
						>
							Register
						</Button>  
					</form>   
					<Button
						className="list-button"
						size="small"
						variant="contained"
						color="primary"
						type="button"
						onClick={getEvent}
					>
						List
					</Button>  
				</div>
				<div className="list-events">
				</div>
			</div>
		</Fragment>
  );
}

export default App
