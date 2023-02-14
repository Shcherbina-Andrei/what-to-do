import { useState } from 'react';
import {FilterTypes} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilterType } from '../../store/app-process/app-process';
import { getCurrentFilterType } from '../../store/app-process/selectors';
import './filtering.css';

function Filtering(): JSX.Element {
  const [openedOptions, setOpenedOptions] = useState(false);
  const currentFilterType = useAppSelector(getCurrentFilterType);
  const dispatch = useAppDispatch();

  const handleFilterType = (type: FilterTypes) => {
    dispatch(setFilterType(type));
    setOpenedOptions(false);
  };


  return (
    <form className="filtering">
      <span className="filtering__caption">Filter by &nbsp;</span>
      <span className="filtering__filter-type" onClick={() => setOpenedOptions(!openedOptions)}>{currentFilterType}</span>
      <ul className={`filtering__options ${openedOptions ? 'filtering__options--opened' : 'filtering__options--closed'}`}>
        {Object.values(FilterTypes).map((filterType) => (
          <li className={`filtering__option ${filterType === currentFilterType ? 'filtering__option--active' : ''}`} key={filterType} onClick={() => handleFilterType(filterType)}>
            {filterType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Filtering;
