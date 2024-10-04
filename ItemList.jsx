import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
 
const ItemList=({items,handlecheck,handleDelete}) =>{
  return (
    <ul>
        {items.map((item)=>(
           <li className='item'>
           <input
             type="checkbox"
             checked={item.checked}
             className="input1"
             onChange={() => handlecheck(item.id)}
           />
           <label
             onDoubleClick={() => handlecheck(item.id)

             }
           >
             {item.item}
           </label>
           <FaTrashAlt
             onClick={() => handleDelete(item.id)}
             role="button"
             tabIndex="0"
             className="del-but"
           />
         </li>
        ))}
       </ul>
  )
}

export default ItemList;

