import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import App from './containers/AppContainer'
import * as serviceWorker from './serviceWorker'
import Themes from './themes'

ReactDOM.render(
  <ThemeProvider theme={Themes.default}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'))

serviceWorker.unregister()
