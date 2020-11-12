import React from 'react';
const Modal = ({ id = 'modal', onClose = () => {}, children }) => {
    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose();
    };
    return (
        <div id={id} className="modal" onClick={handleOutSideClick}>
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};
export default Modal;