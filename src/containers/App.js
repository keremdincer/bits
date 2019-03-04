import React from 'react'
import NotificationArea from '../containers/NotificationArea'
import TestsArea from '../containers/TestsArea'
import ButtonGroup from '../components/ButtonGroup'

const App = () => (
  <div className='App'>
    <h2>BITS</h2>
    <hr />
    <ButtonGroup />
    <hr />
    <NotificationArea />
    <TestsArea />
  </div>
)

export default App
