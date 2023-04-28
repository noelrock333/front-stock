import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, children, onClose }) => {
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [])

    const escFunction = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
    }

    if (isOpen) {
        return (
            <div className="modal is-active">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        );
    }
    return null;
};

export default Modal;