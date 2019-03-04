import React from 'react'
import Notification from './Notification'

const NotificationList = ({ notifications }) => (
  <div className='NotificationList'>
    {notifications.map((notification, index) => (
      <Notification key={index} {...notification} />
    ))}
  </div>
)

export default NotificationList
