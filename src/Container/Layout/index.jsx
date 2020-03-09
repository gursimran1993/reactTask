import React, { Fragment } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Layout({children}){
  return <Fragment>
    <Header/>
      {children}
    <Footer/>
  </Fragment>
}

export default Layout