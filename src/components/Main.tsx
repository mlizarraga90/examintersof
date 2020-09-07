import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './Header'
import SettingsPage from './settings/SettingsPage'
import CrewPage from './crew/CrewPage'

import crewService from '../emulator/crewService'
import settingsService from '../emulator/settingsService'
import operationService from '../emulator/operationService'

function Main (props: {}) {
  
  //console.log(settingsService);
  //console.log(crewService);
  //console.log(operationService);
  return <main>
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={SettingsPage} />
        <Route exact path='/crew' component={CrewPage} />
        <Route>
          Page not found.
        </Route>
      </Switch>
    </HashRouter >
  </main>
}

// Let's expose service to console to simplify debugging
declare global {
  interface Window {
    crewService: Object
    settingsService: Object
    operationService: Object
  }
}

Object.assign(window, { crewService, settingsService, operationService })

export default Main
