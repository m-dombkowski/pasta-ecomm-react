import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <ul>
        {cart.cartItems.map((element) => {
          return (
            <li key={element.id}>
              <h2>{element.name}</h2>
              <p>Quantity: {element.quantity}</p>
              <p>Price/kg: {element.price}</p>
              <p>Total price for product: {element.totalItemPrice}</p>
            </li>
          );
        })}
      </ul>
      <h1>Total price for all items:</h1>
      <h2>{cart.totalCartPrice}$</h2>
    </div>
  );
};

export default Cart;
