import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import 'minireset.css'
const UNSTATED = require('unstated-debug') // eslint-disable-line no-unused-vars

render(<App />, document.getElementById('app'))
