import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <h2>ContactsList</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
