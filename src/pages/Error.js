import React from 'react'
import { Link } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  return <>
    <MainNavigation/>
    <main>
        <h1>404</h1>
        <p>Could Not find this page!</p>
        <Link to="/">Go To Home</Link>
    </main>
  </>
}

export default ErrorPage