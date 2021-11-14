import { Fragment } from 'react'

import { default as Header } from '../../../components/Header'
import { default as BodyDispatcher } from '../../../components/BodyDispatcher'

import '../css/App.css'

const App = () => {
	return (
		<Fragment>
			<Header/>
			<BodyDispatcher/>
		</Fragment>
  );
}

export default App
