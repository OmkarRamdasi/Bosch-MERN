import { useContext, useState } from "react";
import { IProduct } from "../models/IProduct";
import { CartContext } from "../contexts/CartContext";
import { Helmet } from 'react-helmet-async';
const ProductsPage = () => {

  const [products] = useState<IProduct[]>([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, ",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ]);

  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("cartContext is not defined");
  }
  const { addToCart } = cartContext;

  const handleAddToCart = (product: IProduct) => {
    console.log(product);
    // We have to send the above product to the context
    addToCart(product);
  };

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1>Listing Products</h1>

      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p>Rs. {product.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
