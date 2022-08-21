import React from "react";

const Dish = ({ dish, index, removeDish }) => {
    // console.log(dish.ingredient)
    

    return(
        <div>
            <ul className={'dish-list'}>
                <br /><br />
                <li>
                <button className='delete' onClick={() => removeDish(index)}>X</button>&nbsp;
                <b>Name: </b>{dish.name}&nbsp;
                <ul>
                <b>ingredients: </b> {dish.ingredient.join()}
                </ul>
                </li>
            </ul>
        </div>
    )
}

export default Dish