import React from 'react'
import ReactDOM from 'react-dom'
import './simpleModal.scss';

export function SimpleModal ( {children, close , click} )  {

    const handleClose= () => {
        close( false );
    }

    return ReactDOM.createPortal(
        <div className="ModalBackground" onClick={click}>
            
            {children}

            <div onClick={handleClose} className='cierre'></div>
        </div>,
        document.getElementById('modal')
    );
}
