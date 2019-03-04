import React from 'react'
import { connect } from 'react-redux'
import { dismissNotification } from '../actions/notifications'

class Notification extends React.Component {
  componentDidMount () {
    const { dispatch, id, duration = 4 } = this.props
    setTimeout(() => {
      dispatch(dismissNotification(id))
    }, duration * 1000);
  }

  render () {
    const { dispatch, id, title, text, theme } = this.props
    return (
      <div
        className={`Notification ${theme}`}
        onClick={() => dispatch(dismissNotification(id))}
      >
        <div className='NotificationTitle'>
          {title}
        </div>
        <div className='NotificationMessage'>
          {text}
        </div>
      </div>
    )
  }
}

export default connect()(Notification)
