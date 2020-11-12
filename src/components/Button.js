import React from 'react';

const Botao = ({ type = "button", className, onClick = () => {}, children }) => {
    return (
    <button type={type} className={className} onClick={onClick}>{children}</button>
    )
};

export default Botao;