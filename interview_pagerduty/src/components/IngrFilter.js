import React, { useState } from 'react'
import FilterDisplay from './FilterDisplay'

const IngrFilter = ({ dish }) => {
    // console.log(dish, "dish")
    const [filter, setFilter] = useState('')

    let dishes = dish.map(dish => {
        return dish
     }) 
    console.log(dishes, "dish")

    // eslint-disable-next-line array-callback-return
    let filterIngr = dishes.filter(dish => {
        if(filter !== '' /*&& filter === dish.ingredient*/) {
        //     // return dish
        //     return dish.ingredient.toLowerCase().includes(filter)
        }
        return dish.ingredient
    })
    console.log(filterIngr, "filterIngr")
    const handleOnChangeFilter = (event) => {
        setFilter(event.target.value)
        console.log(filter)
    }

    return (
        <div>
            <b>search ingredients: </b><input type="text" onChange={handleOnChangeFilter} value={filter}/> 

            {filterIngr.map((d, index) => {
                return <FilterDisplay key={index} dish={d} />
            })}
        </div>
    )
}

export default IngrFilter