import React from 'react';
import PropTypes from 'prop-types';
import './profil.css'


const  Profil= (props) =>{
   
    return (
     <div className='contenu'>
      <div className='myprofil' >
        <div className='aboutme'>  
          <p style= {{fontWeight: 'bold'}}><span> FullName :</span>{props.FullName}</p>
          <p style= {{fontWeight: 'bold'}}> <span>Profession :</span> {props.Profession}</p>
          <p style= {{fontWeight: 'bold'}}><span>Email :</span> {props.Email}</p>
          <p style= {{fontWeight: 'bold'}}><span>Phone :</span>  {props.Phone}</p>
          </div>
          {props.children}
      </div>
      <button onClick={() => props.handleName(props.FullName)}> Contact Me </button>
      </div>
    );
  }
  Profil.defaultProps = {
    FullName: 'UserName',
    Profession:'User Profession',
    Email:'User mail',
    Phone:'User phone',
    }

Profil.propTypes = {
    FullName: PropTypes.string,
    Profession: PropTypes.string,
    Email:PropTypes.string,
    Phone: PropTypes.string,
}


  export default Profil;