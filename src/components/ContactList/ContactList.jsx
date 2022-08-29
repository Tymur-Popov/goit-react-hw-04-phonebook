import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      console.log(contacts);
      return (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button className={css.listDeleteButton} type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactList;


