import React from 'react'
import ReactDOM from 'react-dom'

// for now we using the pre-compiled CSS for bootstrap and react-arcgis-hub
// TODO: distribute the react-arcgis-hub .scss files and 
// show how to compile/use those in a client app (i.e. via webpack)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-arcgis-hub/dist/react-arcgis-hub.css'
import './index.css'

import AppWrapper from './AppWrapper'

ReactDOM.render(<AppWrapper />, document.getElementById('root'))
