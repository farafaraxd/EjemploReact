import React from 'react';
import PropTypes from 'prop-types';

//Props es donde se guardan los atributos que se mandan desde App.js
const Header = (props) => {

  return (
    <header className='App-header'>
     
      <h1>{props.title}</h1>
 

    </header>
  )
}

Header.defaultProps = {
  title: 'Soy el componente header',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header