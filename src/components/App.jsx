import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/contacts/contactsSelectors';
import { ContactsPage } from 'features/contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <Section title="Contacts">
        <ContactsPage />
      </Section>
      <ToastContainer autoClose={3000} />
    </Layout>
  );
}

export default App;
