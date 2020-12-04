import React from 'react';
import image from './sky.png';
import foto from './myphoto.jpg';
import Profil from './profil/Profil'
import './App.css';

function App() {
  const handleName = (FullName) => alert(FullName);
  return (
 
    <div className="App">
      
      <img className="photoprofil" src={image} style={{  width: '100%' ,height: '500px' }}  alt="sky" />
      
      
      
      
      <Profil 
    FullName=" Basma HAMDI"
    Profession="Mechanical engineer and web developer"
    Email="bsm.hamdi09@gmail.com"
    Phone="0021624395546"
    handleName={handleName}>
    <img  className='imag' src={foto} style={{ borderRadius:'50px'}} alt="myphoto" />
      </Profil>
      
    </div>

     
    
  );
}

export default App;
