import React, { useEffect, useRef } from "react";
import { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";
export default function Notes() {
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getnotes, editnote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getnotes();
    }
    else{
       navigate("/login")
    }
   
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refclose = useRef(null);
  const updatenote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    editnote(note.id, note.etitle, note.etag, note.edescription);
    refclose.current.click();
    e.preventDefault();
  };

  return (
    <div className="container d-flex flex-column">
       <Addnote />
     <button
       type="button"
       className="btn btn-primary d-none"
       data-bs-toggle="modal"
       data-bs-target="#exampleModal"
       ref={ref}
     >
       Launch demo modal
     </button>

     <div
       className="modal fade"
       id="exampleModal"
       tabIndex="-1"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
     >
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h1 className="modal-title fs-5" id="exampleModalLabel">
               Edit Note
             </h1>
             <button
               type="button"
               className="btn-close mx-3"
               data-bs-dismiss="modal"
               aria-label="Close"
             ></button>
           </div>
           <div className="modal-body ">
             <form>
               <div className="mb-3">
                 <label htmlFor="title" className="form-label">
                   Title
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="etitle"
                   name="etitle"
                   aria-describedby="emailHelp"
                   onChange={onChange}
                   value={note.etitle}
                   minLength={5}
                   required
                   
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="description" className="form-label">
                   Description
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="edescription"
                   name="edescription"
                   onChange={onChange}
                   value={note.edescription}
                   minLength={5}
                   required
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="description" className="form-label">
                   Tag
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="etag"
                   name="etag"
                   onChange={onChange}
                   value={note.etag}
                   minLength={5}
                   required
                 />
               </div>
             </form>
           </div>
           <div className="modal-footer">
             <button
               type="button"
               className="btn btn-secondary"
               data-bs-dismiss="modal"
               ref={refclose}
             >
               Close
             </button>
             <button
               disabled={note.etitle.length<5||note.etag.length<5||note.edescription.length<5}
               type="button"
               className="btn btn-primary"
               onClick={handleclick}
             >
               Update Note
             </button>
           </div>
         </div>
       </div>
     </div>
     <div className="row my-3 ">
       <div className="container d-flex justify-content-center mt-4" style={{ fontWeight: 'bold'}}>
         {notes.length === 0 && "No notes to display"}
       </div>
       {notes.map((note) => {
         return (
           <Noteitem key={note._id} note={note} updatenote={updatenote} />
         );
       })}
     </div>
      

       

    </div>
    
     
    
  );
}
