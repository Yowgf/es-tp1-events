import { useEffect } from 'react'

import { default as useEvent } from '../../../hooks/useEvent'

import '../css/Home.css'

const Home = () => {
	const { getEvent } = useEvent()

    useEffect(() => {
        getEvent()
    })

    return (
        <div className="events-body">
            <div id="list-events">
            </div>
        </div>
    )
}

export default Home
