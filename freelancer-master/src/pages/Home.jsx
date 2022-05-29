import React from 'react'
import Contactus from '../components/contactus/Contactus'
import Header from '../components/header/Header'
import RecentProject from '../components/recentProject/RecentProject'
import Testimony from '../components/testimony/Testimony'
import Vision from '../components/vision/Vision'

export default function Home() {
  return (
    <div>
        <Header />
        <Vision />
        <RecentProject />
        <Testimony />
        <Contactus />
    </div>
  )
}
