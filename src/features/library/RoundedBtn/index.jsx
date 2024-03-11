import React, {useState} from "react";
import Modal from "../Modal";

const RoundedBtn = ({}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalX, setModalX] = useState(0);
    const [modalY, setModalY] = useState(0);
    
    const handleMouseOver = (e) => {
        setModalX(event.clientX);
        setModalY(event.clientY);
        setIsModalOpen(true);
    };
    
    const handleMouseOut = () => {
        setIsModalOpen(false);
    };


    return (
        <>
        <button className="roundedBtn-cerfrance"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >Rounded</button>
        </>
    );
};

export default RoundedBtn;