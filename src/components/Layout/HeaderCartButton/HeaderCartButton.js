import CartIcon from "../../Carts/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    return ( 
        <button className={classes.button} onClick={props.onClick}>
            {/* fxnal prop final use whent the cart icon is clicked */}
            <span className={classes.icon} ><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
     );
}
 
export default HeaderCartButton;