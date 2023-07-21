import logo from '.././assets/images/logo192.png';
import styles from '../UI/Footer.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Medal badge with a star" />
            <p>See you</p>
        </footer>
    );
}

export default Footer;
