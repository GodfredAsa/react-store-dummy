import MealItemForm from "./form/MealItemForm";
import classes from "./MealItem.module.css"
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = ({meal}) => {

   const cartCtx =  useContext(CartContext);

    const {name, description, price} = meal
    const formatedPrice = `GHC ${price.toFixed(2)}`;
    const addToCartHandler = amount =>{

        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            amount: amount,
            price: meal.price
        })
    }

    return ( 
        <li className={classes.meal}>
            <div>
                <h3 className={classes.name}>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formatedPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}/>
            </div>
        </li>
     );
}
export default MealItem;