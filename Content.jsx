import React from 'react'
import ItemList from './ItemList';
 
const Content = ({items,handlecheck,handleDelete}) => {

  return (
     <main>
      {items.length ? (
        <ItemList
        items={items}
        handlecheck={handlecheck}
        handleDelete={handleDelete}/>
      ):
      (
        <p style={{marginTop:'2rem'}}>Your list is empty.</p>
      )}
        
     </main>
  )
}

export default Content;
