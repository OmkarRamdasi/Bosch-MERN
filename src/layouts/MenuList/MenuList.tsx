import { Link,useLocation } from "react-router-dom";
import styles from './MenuList.module.scss'
// Functional Component with Arrow Function
const MenuList = () => {
  const location = useLocation();
  const isActive = (path: string): boolean => location?.pathname === path;

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className={`nav-item ${styles.customMenu} ${isActive('/') ? `${styles.activeMenu}` : ``}`}>
        <Link className="nav-link" 
          aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className={`nav-item ${styles.customMenu} ${isActive('/netflix') ? `${styles.activeMenu}` : ``}`}>
        <Link className="nav-link" to="/netflix">
          Netflix
        </Link>
      </li>
      <li className={`nav-item ${styles.customMenu} ${isActive('/employee-manager') ? `${styles.activeMenu}` : ``}`}>
        <Link className="nav-link" to="/employee-manager">
          Employee Manager App
        </Link>
      </li>
      <li className={`nav-item ${styles.customMenu} ${isActive('/products') ? `${styles.activeMenu}` : ``}`}>
        <Link className="nav-link" to="/products">
          Products
        </Link>
      </li>
      <li className={`nav-item ${styles.customMenu} ${isActive('/todos') ? `${styles.activeMenu}` : ``}`}>
        <Link className="nav-link" to="/todos">
          Todos
        </Link>
      </li>
      <li className={`nav-item ${styles.customMenu} ${isActive('/about') ? `${styles.activeMenu}` : ``}`}>
        <Link className="nav-link" to="/about">
          About Us
        </Link>
      </li>
      <li className={`nav-item ${styles.customMenu} ${isActive('/contact') ? `${styles.activeMenu}` : ``}`}>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;