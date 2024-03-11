import React, { useState } from 'react';
import Modal from '../../features/library/Modal';

const MyInput = ({description, description2}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalX, setModalX] = useState(0);
  const [modalY, setModalY] = useState(0);
  const { innerWidth, innerHeight } = window;
  
  const handleMouseOver = () => {
    if( event.clientX > (innerWidth - 600)) {
      console.log(event.clientX)
      setModalX(innerWidth - 600);
    } else {
      setModalX(event.clientX);
    }

    setModalY(event.clientY);
    setIsModalOpen(true);
  };
  
  const handleMouseOut = () => {
      setIsModalOpen(false);
  };

  return (
    <>
    <div className="w-64" 
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    >
      <label htmlFor="email" className="label-input">
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="classic-input"
          placeholder="you@example.com"
        />
      </div>
    </div>
    {isModalOpen && (<Modal description={description} desccription2={description2} x={modalX} y={modalY} />)}
    </>
  )
}
  
export default MyInput;