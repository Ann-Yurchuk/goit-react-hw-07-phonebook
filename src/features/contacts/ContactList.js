import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const filterContacts = items.filter(item => {
    return item.name.toLowerCase().includes(filter);
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
