import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {


  const location = useLocation();
  console.log(location);
  
  
    


  return (
    <h1>Contact</h1>
  )
}
