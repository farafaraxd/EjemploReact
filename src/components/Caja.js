import React from 'react';
import PropTypes from 'prop-types';

//Props es donde se guardan los atributos que se mandan desde App.js
const Caja = (props) => {

  return (
    <div>
      <p style = {
      {color: 'black', 
      backgroundColor: props.color, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: 20}
      }>
      
      {props.text}
      
      </p>
 

    </div>
  )
}

Caja.defaultProps = {
  text: '¡Soy un parrafo!',
}


export default Caja