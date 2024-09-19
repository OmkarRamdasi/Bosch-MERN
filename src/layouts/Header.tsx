
import { Link } from "react-router-dom";
import MenuList from "./MenuList/MenuList";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


function Header() {
  const appName = "React Bosch App";

  const cartContext = useContext(CartContext);
  if(!cartContext){
    throw new Error("cartContext is not defined");
  }
  const { cartItems } = cartContext;


  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {appName}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button className="btn btn-danger me-2">
              Cart({cartItems.length})
            </button>
            <button className="btn btn-warning">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
