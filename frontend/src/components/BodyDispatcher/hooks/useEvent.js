import { default as ExpressClient } from '../../../clients/express'

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

export default useEvent
