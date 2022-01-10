import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';
// import image from './exit.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <span className={s.name}>Добро пожаловать, {name} !</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        {/* <img className={s.image} src={image} alt="logOut" /> */}
        logOut
      </button>
    </div>
  );
}
