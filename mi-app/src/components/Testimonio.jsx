import PropTypes from 'prop-types'
import '../styles/Testimonio.css' 



function Testimonio({nombre,cargo,testimonio,imagen,pershover}) {

  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={imagen}
        alt='Foto de fushiguro'/>
        <img
        className='personaje-hover'
        src={pershover}/>
        <div className='contenedor-texto-testimonio'>
          
          <p className='nombre-testimonio'>
            <strong>{nombre}</strong>
            </p>
          <p className='cargo-testimonio'>
            <strong>{cargo}</strong>
            </p>
          <p className='texto-testimonio'>
            {testimonio}
            </p>
        </div>
    </div>
  );
  
}

Testimonio.propTypes = {
  nombre: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  testimonio: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  pershover: PropTypes.string.isRequired,
}

export default Testimonio;