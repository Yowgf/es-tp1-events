import { default as ExpressClient } from '../clients/express'
import { ISODatetime } from '../utils'

const useEvent = () => {
	const expressClient = new ExpressClient()

	// TODO: remove this hardcoded stuff please! -aholmquist 2022-01-09
	const userToIdMap = {
		"Leonel Mota": 1,
		"Alexander Holmquist": 2,
		"Fernando Tonucci": 3,
		"Felipe Jaworoski": 4,
	}

	const categoryToIdMap = {
		"furto": 1,
		"assalto arma branca": 2,
		"assalto arma de fogo": 3,
		"homicídio": 4,
		"sequestro": 5,
	}

	const wrapAndValidateEvent = eventData => {
		if (userToIdMap[eventData.user] === undefined) {
			throw `invalid register event form: unexistant user ${eventData.user}`
		} else {
			eventData.user = userToIdMap[eventData.user]
		}
		if (categoryToIdMap[eventData.category] === undefined) {
			throw `invalid register event form: unexistant category ${eventData.category}`
		} else {
			eventData.category = categoryToIdMap[eventData.category]
		}

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
		const eventObj = wrapAndValidateEvent(eventData)
		console.log("wrapped event object:", eventObj)
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
