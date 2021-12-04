import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <header className={styles.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
