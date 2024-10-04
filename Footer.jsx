import React from 'react'

const Footer = ({length}) => {
   
  return (
    <footer class='footer'>
      <p>{length} List {length==1 ? "Item" : "Items"}</p>
    </footer>
  )
}

export default Footer
