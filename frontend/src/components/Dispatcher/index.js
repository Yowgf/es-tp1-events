import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'

import { default as Header } from '../Header'
import { 
    Home as HomePage,
    Register as RegisterPage,
    Details as DetailsPage
} from '../../pages'


const Dispatcher = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />}/>

                        <Route path="register" element={<RegisterPage />}>
                        </Route>

                        <Route path="eventDetails/:id" element={<DetailsPage />}>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default Dispatcher
