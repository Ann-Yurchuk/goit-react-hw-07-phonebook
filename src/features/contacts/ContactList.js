import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const { filter } = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  if (filterContacts.length === 0 && !filter) {
    return <p> There are no contacts.</p>;
  }

  return (
    <ul>
      {filterContacts.map(contact => (
        <li key={contact.id}>
          <div>
            <p> {contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
