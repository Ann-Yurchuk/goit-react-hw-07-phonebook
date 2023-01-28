import { useSelector } from 'react-redux';
import {
  getError,
  getIsLoading,
  getContacts,
} from 'redux/contacts/contactsSelectors';
import { ContactsPage } from 'features/contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';

function App() {
  const items = useSelector(getContacts);
  const { isLoading } = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log(items);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <Section title="Contacts">
       {items && <ContactsPage />} 
      </Section>
      <ToastContainer autoClose={3000} />
    </Layout>
  );
}

export default App;
