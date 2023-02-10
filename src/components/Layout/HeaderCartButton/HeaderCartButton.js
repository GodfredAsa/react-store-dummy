import CartIcon from "../../Carts/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css"
import { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";
import { useEffect } from "react";

const HeaderCartButton = (props) => {
    const cartCtx  = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount;
    }, 0) ;

    const {items} = cartCtx;

    const [btnBump, setBtnBump] = useState(false);
    const btnClasses = `${classes.button} ${ btnBump ?  classes.bump: ''}`

    useEffect(() => {

        if(cartCtx.items.length === 0){ return;}
        setBtnBump(true);
        const timer  = setTimeout(() =>{
            setBtnBump(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [items, setBtnBump, cartCtx])

    
    return ( 
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon} ><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
     );
}
 
export default HeaderCartButton;