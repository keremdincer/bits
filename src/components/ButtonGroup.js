import React from 'react'
import { connect } from 'react-redux'
import { success, error, warning, info } from '../actions/notifications'
import { newTest } from '../actions/tests'

const ButtonGroup = ({ dispatch }) => (
  <div>
    <button onClick={() => dispatch(success('Success', 'Success message text'))}>Success</button>
    <button onClick={() => dispatch(error('Error', 'Error message text'))}>Error</button>
    <button onClick={() => dispatch(warning('Warning', 'Warning message text'))}>Warning</button>
    <button onClick={() => dispatch(info('Info', 'Info message text'))}>Info</button>
    <button onClick={() => {
      dispatch(newTest(1, 'Beck Anksiyete', 'Açıklama', 'Referanslar'))
      dispatch(success('Ölçek eklendi', ''))

    }}>Yeni Test</button>
  </div>
)

export default connect()(ButtonGroup)
