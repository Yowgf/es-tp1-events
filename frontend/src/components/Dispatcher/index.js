import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'

import { default as Header } from '../Header'
import { 
    Home as HomePage,
    Register as RegisterPage,
    EventsTable as EventsPage
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

                        <Route path="EventsTable" element={<EventsPage />}>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default Dispatcher
