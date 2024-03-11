import React from 'react';

const BurgerIcon = ({onClick}) => {
    return (
        <div className="burgerIcon" onClick={onClick}>
            <div style={{ width: '35px', height: '4px', backgroundColor: 'rgb(75, 75, 77)', marginBottom: '4px', borderRadius: "5px" }}></div>
            <div style={{ width: '35px', height: '4px', backgroundColor: 'rgb(24, 160, 150)', marginBottom: '4px', borderRadius: "5px" }}></div>
            <div style={{ width: '35px', height: '4px', backgroundColor: 'rgb(232, 80, 31)', marginBottom: '4px', borderRadius: "5px" }}></div>
            <div style={{ width: '35px', height: '4px', backgroundColor: 'rgb(248, 179, 50)', marginBottom: '4px', borderRadius: "5px" }}></div>
        </div>
    );
};

export default BurgerIcon;
