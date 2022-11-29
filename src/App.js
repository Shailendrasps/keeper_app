import Footer from "./components/footer";
import Header from "./components/Header";
import Note from "./components/note";
import CreateArea from "./components/createArea";
import React, { useState } from 'react';

function App() {
  const [notes,setNotes] = useState([]);
  
  function addNote(newNote){
    setNotes(prevNotes => {
     return [...prevNotes,newNote];
    })
  }
  function deleteNote(id){
   setNotes(prevNotes => {
    return prevNotes.filter((value,index) =>{
    return id !== index;
   })
   })
  }
  return (
    <div className="App">
     <Header/>
      <CreateArea onAdd = {addNote}/>
      {notes.map((noteItem,index) => {
        return <Note key ={index} id={index} title={noteItem.input} content={noteItem.text} onDelete = {deleteNote}/>;
      })}
      
      <Footer/> 
      </div>
  );
}

export default App;
