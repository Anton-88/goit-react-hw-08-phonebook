import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { variants } from '../../utils/motionVar';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HomeView.module.css';

const HomeView = () => {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <div className={styles.wrapper}>
            <AnimatePresence>
                <motion.h1
                    className={styles.title}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                    variants={variants}
                >
                    Welcome, user!
                </motion.h1>
            </AnimatePresence>
            <AnimatePresence>
                <motion.p
                    className={styles.text}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                    variants={variants}
                >
                </motion.p>
            </AnimatePresence>
            {!isLoggedIn && (
                <AnimatePresence>
                    <motion.p
                        className={styles.info}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition="transition"
                        variants={variants}
                    >
                    </motion.p>
                </AnimatePresence>
            )}
        </div>
    );
};

export default HomeView;
