import React from 'react'
import TestListItem from './TestListItem'

const TestList = ({ tests }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Reference</th>
      </tr>
    </thead>
    <tbody>
      {tests.map((test, index) => (
        <TestListItem key={index} {...test} />
      ))}
    </tbody>
  </table>
)

export default TestList
