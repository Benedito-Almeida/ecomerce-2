import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import new_collections from '../Assets/new_collections'

const NewCollection = () => {
    return (
            <div className='newcollection' >
                <h1>NEW COLLECIONS</h1>
                <hr />
                <div className='collection'>
                    {new_collections.map((item, i) => {
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}

                        />
                    })}
                </div>
            </div>
        
    )
}

export default NewCollection