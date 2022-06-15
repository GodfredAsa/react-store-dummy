import Modal from '../UI/input/Modal/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {


  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <h6 key={item.id}>{item.name}</h6>
      ))}
    </ul>
  );

  return (
    <Modal onClose = {props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>GHC 35.62</span>
      </div>
      <div className={classes.actions}>
        {/* fxnal close cart Modal used in  */}
        <button className={classes['button--alt']} onClick ={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;