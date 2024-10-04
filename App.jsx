import React from 'react'
import { useState } from 'react'
import Header from './Header'
import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import SearchItem from './SearchItem'
import './App.css'

const App = () => {
    
    const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppinglist')));

    const [newitem,setnewItem]=useState('');

    const [search,setSearch]=useState('');

    const addItem=(item)=>{
      const id=items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem={id,checked:false,item};
      const listItem=[...items,myNewItem];
      setItems(listItem);
      localStorage.setItem('shoppinglist',JSON.stringify(listItem));
    }

    const handlecheck=(id)=>{
      const listItems=items.map((item)=>
       item.id==id ? {...item,checked:!item.checked}:item);
      setItems(listItems);
      localStorage.setItem('shoppinglist',JSON.stringify(listItems));
     }
   
     const handleDelete=(id)=>{
       const listItems=items.filter((item)=>item.id!=id);
       setItems(listItems);
      localStorage.setItem('shoppinglist',JSON.stringify(listItems));
     }
     
     const handleSubmit=(e)=>{
      e.preventDefault();
      if(!newitem) return;
      addItem(newitem);
      setnewItem('');  
     }

  return (
    <div>
      <Header/>
      <SearchItem 
      search={search}
      setSearch={setSearch}/>
      <AddItem
      newitem={newitem}
      setnewItem={setnewItem}
      handleSubmit={handleSubmit}/>

      <Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleDelete={handleDelete}
      handlecheck={handlecheck}/>

      <Footer length={items.length}/>

    </div>
  )
}

export default App
