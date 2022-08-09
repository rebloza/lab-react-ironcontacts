
import './App.css';
import allContacts from "./contacts.json"
import { useState } from 'react';

function App() {
     
  // se crea una variable de estado y almacena una matriz
  const [contacts, setContacts] = useState(allContacts.slice(0, 5))

  const addContacts = () => {
    const randomNum = Math.random() * allContacts.length 
    const randomPos = Math.floor(randomNum) // redondea hacia bajo
    const contactsToAdd = allContacts[randomPos]

    const arryCopy = [...contacts]
    arryCopy.push(contactsToAdd)

    setContacts(arryCopy)
  }

  const sortName = () => {

    const arryCopy = [...contacts]
     arryCopy.sort((contacts1, contacts2) => {
      if(contacts1.name > contacts2.name) {
        return -1
      }else {
        return 1
      }
     })

     setContacts(arryCopy)
  }

  const sortPopularity = () => {

    const arryCopy = [...contacts]
     arryCopy.sort((contacts1, contacts2) => {
      if(contacts1.popularity > contacts2.popularity) {
        return 1
      }else {
        return -1
      }
     })
     setContacts(arryCopy)
  }

  const handleDelete = (id) => {
     const filterArr  = contacts.filter((eachContacts) => {
      return eachContacts.id !== id
     })
     setContacts(filterArr)
  }

  return(
    <div>

    {contacts.map((eachContacts)=>{

      return (
         
          <table >
          <button onClick={addContacts}>Add Random Contact</button>
          <button onClick={sortPopularity} >Sort by popularity</button>
          <button onClick={sortName}>Sort by name</button>
            <h1>Picture</h1>
           <img src={eachContacts.pictureUrl} height={'100px'} />
           
            <h1>Name</h1>
           <h2>{eachContacts.name}</h2>
          
          <h1>Popularity</h1>
           <p>{eachContacts.popularity}</p>

           <h3>wonOscar</h3>
           <p>{eachContacts.wonOscar ? '🏆' : 'false'}</p>

           <h2>wonEmmy</h2>
           <p>{eachContacts.wonEmmy ? '🏆' : 'false' }</p>

           <h4>Actions</h4>
           <button onClick={() => handleDelete(eachContacts.id)}>Delete</button>

          </table>
       

      )

    })}

    </div>

    
  )

  
}

export default App;
