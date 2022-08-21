import React from 'react'

const FilterDisplay = ({ dish }) => {
    console.log(dish, "FilterDisplay")
    return (
        <div>
            <ul>
                <li>
                    <b>{dish.name}</b>
                    <ul>
                    {dish.ingredient.map((ingr, index) => {
                            return <li key={index}>{ingr}</li>
                        })}
                    </ul>    
                </li>     
            </ul>
        </div>
    )
}

export default FilterDisplay 