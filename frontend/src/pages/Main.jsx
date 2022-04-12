import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../contexts/constants'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Student from './role/Student'
import Teacher from './role/Teacher'


const Main = () => {
  const [body, setBody] = useState()
  useEffect (async () => {
    const get = await axios.get(`${apiUrl}/user`, { headers: { "Authorization": `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)}` } });
    if (get.data.user['role'] === "TEACHER") {
      setBody(<Teacher/>)
    }
    else {
      setBody(<Student/>)
    }
  },[])
  return (
    <>
      <Header />
      {body}
      <Footer />
    </>
  )
}

export default Main