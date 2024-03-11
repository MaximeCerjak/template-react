import React, { useState } from "react";
import Modal from "../Modal";

const MyInput = ({ id, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const { innerWidth, innerHeight } = window;
  
    const handleMouseOver = () => {
        if( event.clientX > (innerWidth - 600)) {
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
        <div>
            <input
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                type="number"
                name="dossier"
                id="dossier"
                className="select-input"
                placeholder="ex : 020717"
                min="0"
            />
            {isModalOpen && (
            <Modal description={description} x={modalX} y={modalY} />
            )}
        </div>
        );
    };

export default MyInput;