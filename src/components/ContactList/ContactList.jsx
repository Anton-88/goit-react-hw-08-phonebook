import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import IconButton from '@material-ui/core/IconButton';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../utils/motionVar';
import styles from './ContactList.module.css';

function ContactList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
    const contacts = useSelector(contactsSelectors.getContacts);

    return (
        <>
            {contacts.length > 0 && (
                <motion.ul className={styles.list}>
                    <AnimatePresence>
                        {filteredContacts.map(({ id, name, number }) => (
                            <motion.li
                                className={styles.item}
                                key={id}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition="transition"
                                variants={variants}
                            >
                                <p className={styles.info}>
                                    <b>{name}</b>
                                    <em>{number}</em>
                                </p>
                                <IconButton
                                    aria-label="delete"
                                    color="secondary"
                                    type="button"
                                    onClick={() => dispatch(contactsOperations.deleteContact(id))}
                                >
                                    Del
                                </IconButton>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </motion.ul>
            )}

            {!contacts.length && (
                <AnimatePresence>
                    <motion.p
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition="transition"
                        variants={variants}
                    >
                        No contacts in your phonebook, please add some!
                    </motion.p>
                </AnimatePresence>
            )}
        </>
    );
}

export default ContactList;
