import React from 'react'
import { Layout, Menu } from 'antd'
import { routes } from '../router'
import { useNavigate } from 'react-router-dom'

function Header() {
  const history = useNavigate()

  const navItems = routes.map(({ path, title }) => ({
    label: <div style={{ color: 'white' }}>{title }</div>,
    key: path,
    onClick: () => history(path)
  }))

  return (
    <Layout.Header style={{ position: 'sticky', top: 0, left: 0, zIndex: 1000 }}>
      <Menu color='white' mode='horizontal' theme='dark' items={navItems}/>
    </Layout.Header>
  )
}

export { Header }
