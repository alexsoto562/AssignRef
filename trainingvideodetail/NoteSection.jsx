import React, { useState } from "react";
import { Button } from "react-bootstrap";

function NoteSection(){
    const [note, setNote] = useState('')

    const noteChange =(e)=>{
        setNote(e.target.value)
    }

    return (
        <div className="notes-textbox-padding">
            <h2>Note Section</h2>  
            

            <textarea className="form-control" rows="5" value={note} onChange={noteChange}
             />
            <br/>
            <Button variant="info">Save Notes </Button>
            
        </div>
    )
}

export default NoteSection