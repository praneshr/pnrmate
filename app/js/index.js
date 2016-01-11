import page from 'page'
import Template from './template/template'
import config from './config/global-config'
import React from 'react'
import ReactDom from 'react-dom'

const renderLayout = (context) => {
  const renderNode = document.getElementById(config.renderNode)
  ReactDom.render(
    <Template {...context} />,
    renderNode
  )
}

page('/', (context) => {
  renderLayout({context, pageName: 'home'})
})

page('*', (context) => {
  renderLayout({context, pageName: 'error'})
})

page()
