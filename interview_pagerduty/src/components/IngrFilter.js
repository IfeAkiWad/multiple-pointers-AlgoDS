import React, { useState } from 'react'
import FilterDisplay from './FilterDisplay'

const IngrFilter = ({ dish }) => {
    // console.log(dish, "dish")
    const [filter, setFilter] = useState('')

    let dishes = dish.map(dish => {
        return dish
     }) 
    console.log(dishes, "dishes")

    let filterIngr = dishes.filter(dish => {
        if(filter !== '') {
            return dish.toLowerCase().includes(filter)
        }
    })

    const handleOnChangeFilter = (event) => {
        setFilter(event.target.value)
        console.log(filter)
    }

    return (
        <div>
            <b>search ingredients: </b><input type="text" onChange={handleOnChangeFilter} value={filter}/> 

            {filterIngr.map(d => {
                return <FilterDisplay key={d.id} dish={dish} />
            })}
        </div>
    )
}

export default IngrFilter