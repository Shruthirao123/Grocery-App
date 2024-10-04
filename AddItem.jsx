import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newitem,setnewItem,handleSubmit}) => {
  return (
     <form className='addFrom' onSubmit={handleSubmit}>
      <label htmlFor="addItem"></label>
      <input 
      className='input2'
      autoFocus
      id='addItem'
      type="text"
      placeholder='Add Item'
      value={newitem}
      onChange={(e)=>{setnewItem(e.target.value)}}
      required
      />
      <button type='submit' className='plusbut'><FaPlus/></button>
     </form>
  )
}

export default AddItem;
