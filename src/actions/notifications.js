let nextNotificationId = 0

export const success = (title, text) => ({
  type: 'NEW_NOTIFICATION',
  id: nextNotificationId++,
  title,
  text,
  theme: 'Success'
})

export const error = (title, text) => ({
  type: 'NEW_NOTIFICATION',
  id: nextNotificationId++,
  title,
  text,
  theme: 'Error'
})

export const warning = (title, text) => ({
  type: 'NEW_NOTIFICATION',
  id: nextNotificationId++,
  title,
  text,
  theme: 'Warning'
})

export const info = (title, text) => ({
  type: 'NEW_NOTIFICATION',
  id: nextNotificationId++,
  title,
  text,
  theme: 'Info'
})

export const dismissNotification = id => ({
  type: 'DISMISS_NOTIFICATION',
  id
})
