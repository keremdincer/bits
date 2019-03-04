const notifications = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          theme: action.theme
        }
      ]

    case 'DISMISS_NOTIFICATION':
      return state.filter(notification => notification.id !== action.id)

    default:
      return state
  }
}

export default notifications
