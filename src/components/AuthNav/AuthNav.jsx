import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
            style={{
                borderRadius: 35,
                backgroundColor: "#f50057",
                padding: "1px 25px",
                marginRight: "10px",
                fontSize: "18px"
            }}
        >
            Sign up
        </NavLink>
        <NavLink
            to="/login"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
            style={{
                borderRadius: 35,
                backgroundColor: "#f50057",
                padding: "1px 25px",
                fontSize: "18px"
            }}
        >
            Log in
        </NavLink>
    </div>
);

export default AuthNav;
