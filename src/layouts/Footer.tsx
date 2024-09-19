
import styles from "./Footer.module.scss";
import MenuList from "./MenuList/MenuList";


const Footer = function() {
  let copyrightYear = 2024;

  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p className={styles.purpleText}>Copyright {copyrightYear} | Bosch</p>
      <p className={styles.greenText}>Happily made in India</p>
    </footer>
  );
}

export default Footer;
