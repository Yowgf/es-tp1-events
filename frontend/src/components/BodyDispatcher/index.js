import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import { default as useEvent } from './hooks/useEvent'

const BodyDispatcher = () => {
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
    )
}

export default BodyDispatcher
