import { Spin } from 'antd'
import React from 'react'

function Spinner({ size='large' }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Spin size={size} />
    </div>
  )
}

export { Spinner }
