import React, { useState } from "react";
import Modal from "../Modal";

const MyButton = ({ id, description, content }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const { innerWidth, innerHeight } = window;
    
    const handleMouseOver = (description) => {
        if( event.clientX > (innerWidth - 400)) {
            console.log(event.clientX)
            setModalX(innerWidth - 400);
        } else {
            setModalX(event.clientX);
        }
        setModalY(event.clientY);
        if( content !== "Rechercher:hover" )
        {
            return
        } else {
            setIsModalOpen(true);
        }
        
    };
    
    const handleMouseOut = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button 
            className="primaryBtn-cerfrance"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
            {content}
            </button>
            {isModalOpen && (
            <Modal description={description} x={modalX} y={modalY} />
            )}
        </div>
        );
    };

    export default MyButton;