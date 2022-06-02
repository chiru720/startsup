import React from 'react';
import Contactus from '../components/contactus/Contactus';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import RecentProject from '../components/recentProject/RecentProject';
import Testimonial from '../components/testimonial/Testimonial';
import Vision from '../components/vision/Vision';

export default function Home() {
  return (
    <div>
      <Header />
      <Vision />
      <RecentProject />
      <Testimonial />
      <Contactus />
      <Footer />
    </div>
  );
}
