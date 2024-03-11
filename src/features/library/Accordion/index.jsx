import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
        <button className="accordion-title" onClick={toggleAccordion}>
            {title}
            <span className={`accordion-icon ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
            {children}
        </div>
        </div>
    );
};

export default Accordion;