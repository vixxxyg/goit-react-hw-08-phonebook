import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
// import s from './ContactsView.module.css';

function Contacts() {
  return (
    <div>
      <h1>Add something into Phonebook</h1>
      <ContactForm />
      <h2>My contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Contacts;
