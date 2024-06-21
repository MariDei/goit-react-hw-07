import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
