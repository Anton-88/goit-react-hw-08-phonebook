import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './LoaderComponent.module.css';

function LoaderComponent() {
    return (
        <div className={styles.overlay}>
            {/* <Loader type="ThreeDots" color="#f50057" height="35" /> */}
            <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
        </div>
    );
}

export default LoaderComponent;
