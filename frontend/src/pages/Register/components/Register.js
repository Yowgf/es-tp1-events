import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { default as Body } from '../../../components/Body'

import { default as useEvent } from '../../../hooks/useEvent'
import { Form, FormField } from '../../../components/Form'
import './css/Register.css'

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
	const onSubmit = async registerFormData => {
		console.log(`Requesting registration with '${registerFormData.description}'`)
		await postEvent(registerFormData)
		document.getElementById("event-description").innerText = registerFormData.description
	}

    return (
        <Body> 
            <Form
                id="register-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    id="event-title"
                    label="Title"
                    {...register("title")}
                />
                <FormField
                    id="event-category"
                    label="Category"
                    {...register("category")}
                />
                <FormField
                    id="event-description"
                    label="Description"
                    {...register("description")}
                />  
                <Button
                    id="register-button"
                    size="small"
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Register
                </Button>  
            </Form>  
        </Body>
    )
}

export default Register
