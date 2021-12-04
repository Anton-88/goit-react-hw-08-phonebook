import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';

function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <nav className={styles.nav}>
            <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
                Home
            </NavLink>

            {isLoggedIn && (
                <NavLink
                    to="/contacts"
                    exact
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}

export default Navigation;
