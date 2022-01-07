import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'

import { default as Header } from '../Header'
import { 
    Home as HomePage,
    Map as MapPage,
    Register as RegisterPage

} from '../../pages'


const Dispatcher = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />}/>

                        <Route path="map" element={<MapPage />}>
                        </Route>
                        <Route path="register" element={<RegisterPage />}>
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default Dispatcher
