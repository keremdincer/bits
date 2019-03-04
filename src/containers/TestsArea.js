import { connect } from 'react-redux'

import TestList from '../components/TestList'

const mapStateToProps = state => ({
  tests: state.tests
})

export default connect(mapStateToProps)(TestList)
