import React from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store'
import Routes from 'routes'
import { LayoutProvider } from 'admin/context/LayoutContext'

export default () => (
  <LayoutProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </LayoutProvider>
)
