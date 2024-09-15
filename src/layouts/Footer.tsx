/*
  Skeleton of a component
    * imports (optional)
    * component defn 
       must return JSX
    * export 
*/

import MenuList from "./MenuList";

// Functional Component with Anonymous Function
const Footer = function() {
  let copyrightYear = 2024;

  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright {copyrightYear} | Bosch</p>      
    </footer>
  );
}

export default Footer;
