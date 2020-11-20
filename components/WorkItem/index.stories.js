import React from 'react'
import WorkItem from '.'
import mock from './mock.json'

export default {
  title: 'Components/WorkItem',
  component: WorkItem,
}

export const Default = () => (
  <div style={{ maxWidth: 400 }}>
    <WorkItem work={mock} />
  </div>
)
