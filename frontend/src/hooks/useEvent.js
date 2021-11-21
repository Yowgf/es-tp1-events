import { default as ExpressClient } from '../clients/express'

const useEvent = () => {
	const expressClient = new ExpressClient()

	const wrapEvent = eventDescription => {
		return {
			"datetime": "", // TODO: get current datetime -- aholmquist 2021-10-31
			"category": "all", // TODO: category should be input from user -- aholmquist 2021-10-31
			"event_description": eventDescription
		}
	}

	const getEvent = async () => {
		try {
			return await expressClient.getEvent().then(res => res.data)
		} catch(e) {
			// TODO: should instead use lodash to log message -- aholmquist 2021-10-31
			console.log(`Error when getting event: ${e}`)
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
