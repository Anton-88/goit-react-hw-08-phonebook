import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../utils/motionVar';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import styles from './Filter.module.css';

function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(contactsSelectors.getFilter);
    const contacts = useSelector(contactsSelectors.getContacts);

    return (
        <>
            {contacts.length > 0 && (
                <AnimatePresence>
                    <label className={styles.label}>
                        <motion.input
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition="transition"
                            variants={variants}
                            className={styles.input}
                            type="text"
                            value={filter}
                            placeholder="Please, enter value to find contact..."
                            onChange={e =>
                                dispatch(contactsActions.filterContact(e.target.value))
                            }
                        />
                    </label>
                </AnimatePresence>
            )}
        </>
    );
}

export default Filter;
