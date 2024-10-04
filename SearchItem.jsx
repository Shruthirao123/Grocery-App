import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
     <form className='searchfore' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor='search'></label>
      <input 
      id='search'
      type='text'
      role='searchbox'
      placeholder='Search Items'
      className='searchboxx'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
     </form>
  )
}

export default SearchItem
