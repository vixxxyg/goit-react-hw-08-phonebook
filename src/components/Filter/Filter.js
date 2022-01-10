import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.input_container}>
      <h4 className={s.header}>Find contacts by name</h4>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        className={s.input}
      />
    </div>
  );
}
