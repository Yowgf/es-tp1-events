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
            user: '',
            name: '', // Event name, i.e. title
            category: '',
			description: '',
            latitude: '',
            longitude: '',
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
                {/* TODO: In the future, this field should be automatically known by the system,
                 since the user would be logged in -aholmquist 2022-01-09 */}
                <FormField
                    id="user-name"
                    label="Your Name"
                    register={register("user")}
                />

                <FormField
                    id="event-title"
                    label="Event Title"
                    register={register("name")}
                />
                <FormField
                    id="event-category"
                    label="Event Category"
                    register={register("category")}
                />
                <FormField
                    id="event-description"
                    label="Event Description"
                    register={register("description")}
                /> 

                {/* In the future, this should be known by the system and thus
                 these fields should be removed -aholmquist 2022-01-09 */}
                <FormField
                    id="event-latitude"
                    label="Event Latitude"
                    register={register("latitude")}
                />  
                <FormField
                    id="event-longitude"
                    label="Event Longitude"
                    register={register("longitude")}
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
