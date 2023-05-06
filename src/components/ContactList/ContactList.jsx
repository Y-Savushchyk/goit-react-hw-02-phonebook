import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className="list">
    {contacts.map(({ id, name, number }) => (
      <li className="item" key={id}>
        <p className="name">{name} :</p>
        <p className="text">{number}</p>
        <button
          className="btn__on"
          type="button"
          onClick={() => onDeleteContacts(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};