import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Loading } from '../components/loading/Loading'
import Teacher from './role/Teacher'


const Main = () => {
  return (
    <>
      <Header />
      <Loading/>
      <Teacher/>  
      <Footer />
    </>
  )
}

export default Main