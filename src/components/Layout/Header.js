import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
const Header = (props) => {
    return ( 
        <Fragment>
            <header className={classes.header}>
                <h1>SwitMeals</h1>
                <i className="bi bi-cart4 h4"></i>
            </header>
{/* the css class name uses the syntax below below the class name has a - in between */}
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food" />
            </div>
        </Fragment>
     );
}
 
export default Header;