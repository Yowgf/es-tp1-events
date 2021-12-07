import { Fragment } from 'react'
import './css/Form.css'

const Form = (props) => {
    return (
        <form
            className="form"
            {...props}
        >
            {props.children} 
        </form>
    )
}

const FormField = (props) => {
    return (
        <Fragment>
            {(props.id !== undefined && props.label !== undefined) ?
                <label className="form-label" htmlFor={props.id}>
                    {props.label}
                </label> :
                <></>
            }
            <input 
                id={props.id} 
                className="form-field"
                {...props.register}
            >
                {props.children}
            </input>
        </Fragment>
    )
}

export {
    Form,
    FormField,
}
