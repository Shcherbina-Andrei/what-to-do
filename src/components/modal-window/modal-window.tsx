import React from 'react';
import './modal-window.css';

type PageProps = {
  children: React.ReactNode;
  active: boolean;
  setActive: (modalActive: boolean) => void;
}

function ModalWindow({children, active, setActive}: PageProps): JSX.Element {
  return (
    <div className={active ? 'modal modal--active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content modal__content--active' : 'modal__content'} onClick={(evt) => evt.stopPropagation()}>
        <button className="modal__close-button" type="button" onClick={() => setActive(false)}>
          <span className="visually-hidden">
            Close
          </span>
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
