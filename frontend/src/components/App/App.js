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

	const getEvent = async () => {
		try {
			return await expressClient.getEvent().then(res => res.data)
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
	const { expressClient, postEvent } = useEvent()

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
				</div>
				<div className="list-events">
				</div>
			</div>
		</Fragment>
  );
}

export default App
