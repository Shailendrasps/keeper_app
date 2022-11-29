import React from 'react'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
  const [note,setNote] = useState({input:'',text:''});
  const [check,setCheck] =useState(false);
  function viewHandler(){
    setCheck(true);
  }
  function addText(event){
    const {name,value} = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name] :value
      };
    })
  }
  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
    setNote({input:'',text:''});
  }
  return (
    <div>
        <form className='create-note'>
            {check ?<input name ="input" type='text' placeholder='Title' value={note.input} onChange = {addText}/>:null}
            <textarea name="text" placeholder="Take a note..." rows={check?3:1} value={note.text} onChange={addText} onClick={viewHandler}/>
            <Zoom in={check}>
            <Fab onClick = {submitNote}><AddIcon/></Fab>
            </Zoom>
            
        </form>
    </div>
  );
}
