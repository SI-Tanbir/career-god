

import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Banner from './Banner/Banner'
import Statistics from './Statistics/Statistics'

const Root = () => {
  return (
    <div>
        <Header></Header>
     
     
        <Outlet>
        

            
        </Outlet>
        
        <Footer></Footer>
        </div>

  )
}

export default Root