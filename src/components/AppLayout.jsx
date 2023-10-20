import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Content } from 'antd/es/layout/layout'

function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
    </Layout>
  )
}

export { AppLayout }
