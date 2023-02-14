import './checkbox.css';

type propsType = {
  isDone: boolean;
  handleCheckbox: () => void;
  styleClass?: string;
  checkboxId?: string;
}

function Checkbox({isDone, handleCheckbox, styleClass, checkboxId}: propsType): JSX.Element {
  return (
    <label className={`checkbox ${styleClass ? styleClass : ''}`}>
      <input className="checkbox__input" id={checkboxId ? checkboxId : ''} type="checkbox" checked={isDone} onChange={handleCheckbox}/>
      <span className="checkbox__indicator"></span>
    </label>
  );
}

export default Checkbox;
