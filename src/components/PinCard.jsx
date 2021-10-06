import React from 'react';
import '../App.css';

const PinCard = (props) => {
  return (
    <div
      className='card'
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
    >
      <img src={props.image} alt="" style={{ ..._stylesPinCard.image }} />

      <button className='btnGuardar' style={{ ..._stylesPinCard.buttonGuardar }}>Guardar</button>
      <button  style={{ ..._stylesPinCard.button1 }}>
        <svg className='btn1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ ..._stylesPinCard.svg }}>
          <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
        </svg>
      </button>
      <button  style={{ ..._stylesPinCard.button2 }}>
        <svg className='btn2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ ..._stylesPinCard.svg }}>
          <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
        </svg>

      </button>
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
    borderColor: 'transparent',
    position: 'relative',
    zIndex: '2',
    cursor: 'pointer',
    
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    borderColor: 'transparent',
  },

  buttonGuardar: {
    // display: 'flex',
    // visibility:'hidden',
    position: 'absolute',
    top: '27px',
    left: '78%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#e60023',
    color: 'white',
    padding: '10px',
    fontSize: '15px',
    fontWeight:'bold'
  },

  button1: {
    display: 'flex',
    position: 'absolute',
    top: '90%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    height: '25px',
    width: '25px',
    backgroundColor: 'white',
    color: 'white',   
  },
  button2: {
    display: 'flex',
    position: 'absolute',
    top: '90%',
    left: '87%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    height: '25px',
    width: '25px',
    backgroundColor: 'white', 
  },
  svg: {
    height: '25px',
    width: '25px',    
  },  
};

export default PinCard;
