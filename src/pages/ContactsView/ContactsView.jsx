import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { contactsOperations } from '../../redux/contacts';
import styles from './ContactsView.module.css';

export default function ContactsView() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

    return (
        <div className={styles.wrapper}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}
