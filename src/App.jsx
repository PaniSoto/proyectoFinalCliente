// import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App