import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { default as Body } from '../../../components/Body'

import { default as useEvent } from '../../../hooks/useEvent'

const Register = () => {
	const { postEvent } = useEvent()

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
        <Body> 
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
        </Body>
    )
}

export default Register
