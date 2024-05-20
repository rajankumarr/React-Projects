// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import AddContact from './Components/AddContact.js';
import ContactList from './Components/ContactList.js';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4'


function App() {
  const localStorageKey="contact"

  const [contact, setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  || []})
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(contact))
  },[contact])
  const addContact=(data)=>{
    setContact([...contact,{id:uuid4(),data} ])

  }
  const removeContact=(id)=>{
    const updatedList=contact.filter((val)=>{
      return val.id !== id;
    })
    setContact(updatedList)

  }
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <AddContact addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact} />
      </div>
    </div>
  );
}

export default App;
