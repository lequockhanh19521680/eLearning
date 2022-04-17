import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../contexts/constants'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Teacher from './role/Teacher'
import Student from './role/Student'
import { Route, Routes } from 'react-router-dom'
import Exercise from '../components/exercise/Exercise'
import Lectures from '../components/lectures/Lectures'


const Main = () => {
  const [body, setBody] = useState(<></>)
  const [user, setuser] = useState({})
  useEffect(async () => {

    let result = await axios.get(`${apiUrl}/user`, { headers: { "Authorization": `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)}` } });
    if (result.data.user['role'] === "TEACHER") {
      setBody(<Teacher user={result.data.user} />)
    }
    else {
      setBody(<Student user={result.data.user} />)
    }
    setuser(result.data.user)

  }, [])
  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={body} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/lectures" element={<Lectures />} />
      </Routes>
      <Footer user={user} />
    </>
  )
}

export default Main