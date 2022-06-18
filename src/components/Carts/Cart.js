import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/input/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = id => {}
  const addCartItemHandler = item => {}

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
       <CartItem 
            key= {item.id} 
            name={item.name} 
            price ={item.price} 
            onRemove ={removeCartItemHandler.bind(null, item.id)} 
            onAdd = {addCartItemHandler.bind(null, item)}
            />
      ))}
    </ul>
  );

  return (
    <Modal onClose = {props.onClose}>
      {cartItems}
      <div className={classes.total}> 
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {/* fxnal close cart Modal used in  */}
        <button className={classes['button--alt']} onClick ={props.onClose}>Close</button>
      { hasItems && <button className={classes.button}>Order</button> }
      </div>
    </Modal>
  );
};

export default Cart;