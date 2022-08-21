import React, {useState} from "react";

const DishForm = ({ addNewDish, dish}) => {
    const [newDish, setNewDish] = useState('')
    const [ingredient, setIngredient] = useState('')
 
    const handleOnChangeName = (event) => {
        setNewDish(event.target.value)
    }
    const handleOnChangeIngr = (event) => {
        setIngredient(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if(!newDish) return 
            addNewDish(newDish, ingredient) 
            setNewDish('')
            setIngredient('')
        
    }

    

    return(
        <div>
            
            <br /><br />
            <form onSubmit={handleOnSubmit}>
                <b>Name: </b><input type='text' 
                name='name'
                onChange={handleOnChangeName} 
                value={newDish} />&nbsp;
                <br /><br />

                <b>Ingredients: </b> <input type='text' 
                name='ingredient'
                onChange={handleOnChangeIngr} 
                value={ingredient} />&nbsp;
                <br /><br />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default DishForm