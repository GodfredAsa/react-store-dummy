import MealItemForm from "./form/MealItemForm";
import classes from "./MealItem.module.css"
const MealItem = ({meal}) => {

    const {name, description, price} = meal
    const formatedPrice = `$${price.toFixed(2)}`

    return ( 
        <li className={classes.meal}>
            <div>
                <h3 className={classes.name}>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formatedPrice}</div>
            </div>
            <div>
                <MealItemForm/>
            </div>
        </li>
     );
}
export default MealItem;