import { default as ExpressClient } from '../clients/express'
import { ISODatetime } from '../utils'

const useEvent = () => {
	const expressClient = new ExpressClient()

	const wrapEvent = eventData => {
		return {
			"createdAt": (new ISODatetime()).Now(),
			...eventData,
		}
	}

	const getEvents = async () => {
		try {
			return await expressClient.getEvents().then(res => res.data)
		} catch(e) {
			console.error(`when getting events: ${e}`)
		}
	}

	const getEvent = async (eventID) => {
		try {
			return await expressClient.getEvent(eventID).then(res => res.data)
		} catch (e) {
			console.error(`when getting event: ${e}`)
		}
	}

	const postEvent = async eventData => {
		const eventObj = wrapEvent(eventData)
		console.log("wrapped event description:", eventObj.description)
		try {
			return await expressClient.postEvent(eventObj).then(res => res)
		} catch(e) {
			console.error("Error when posting event")
		}
	}

	return {
		expressClient,
		getEvents,
		getEvent,
		postEvent,
	}
}

export default useEvent
