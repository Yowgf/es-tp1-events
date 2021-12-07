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
            title: '',
            category: '',
			description: '',
		},
		mode: 'onChange',
	  })
	const onSubmit = async registerFormData => {
		console.log(`Requesting registration with '${Object.values(registerFormData)}'`)
        postEvent(registerFormData).then(res => console.log("resp:", res))
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
                    register={register("title")}
                />
                <FormField
                    id="event-category"
                    label="Category"
                    register={register("category")}
                />
                <FormField
                    id="event-description"
                    label="Description"
                    register={register("description")}
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
