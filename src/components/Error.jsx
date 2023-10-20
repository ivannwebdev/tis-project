import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import React from 'react'

function Error({ message }) {
  return <ErrorBoundary>{message}</ErrorBoundary>
}

export { Error }
