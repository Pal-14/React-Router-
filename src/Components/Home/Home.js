import React from 'react';

import { Link } from 'react-router-dom';


export default function Home() {
  
 
  return (
    <>
    <h1>Bienvenue sur le site</h1>
    <Link 
    to='/contact'
    state={{
      depuisHome : 'test de Home'
    }}
    >Contact</Link>
    </>
  )
}
