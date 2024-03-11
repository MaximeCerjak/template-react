import React, { useState } from "react";
import Modal from "../Modal";

const MyButtonKo = ({ id, description, content }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    const { innerWidth, innerHeight } = window;
    
    const handleMouseOver = (description) => {
        if( Event.clientX > (innerWidth - 400)) {
            console.log(Event.clientX)
            setModalX(innerWidth - 400);
        } else {
            setModalX(Event.clientX);
        }
        setModalY(Event.clientY);
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
            className="btn-negation"
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

    export default MyButtonKo;