import React from 'react'
import { connect } from 'react-redux'
import { info } from '../actions/notifications'

const TestListItem = ({ title, description, reference, dispatch }) => (
  <tr onClick={() => dispatch(info('Ölçek seçildi', title))}>
    <td>{title}</td>
    <td>{description}</td>
    <td>{reference}</td>
  </tr>
)

export default connect()(TestListItem)
