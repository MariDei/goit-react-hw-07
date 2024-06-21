import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { RiContactsFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  if (!name || !number) {
    return null;
  }

  return (
    <div className={css.item}>
      <div className={css.wrapper}>
        <h3 className={css.title}>
          <RiContactsFill className={css.icon} />
          {name}
        </h3>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
