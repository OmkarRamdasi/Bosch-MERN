/*
  Skeleton of a component
    * imports (optional)
    * component defn 
       must return JSX
    * export 
*/
import styles from "./Footer.module.scss";
import MenuList from "./MenuList/MenuList";

// Functional Component with Anonymous Function
const Footer = function() {
  let copyrightYear = 2024;

  // must return JSX
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
