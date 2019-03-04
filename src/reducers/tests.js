const tests = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TEST':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          reference: action.reference
        }
      ]
    default:
      return state
  }
}

export default tests
