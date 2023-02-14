import React from 'react';
import './task-button.css';

type propsType = {
  children: React.ReactNode;
  handleAction: () => void;
  styleClass?: string;
}

function TaskButton({children, handleAction, styleClass}: propsType): JSX.Element {
  return (
    <button className={`task-card__button ${styleClass ? styleClass : ''}`} type="button" onClick={handleAction}>
      {children}
    </button>
  );
}

export default TaskButton;
