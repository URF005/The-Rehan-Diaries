import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import about from "./images/cardimg.jpg" ; 

export default function Noteitem(props) {
  const context = useContext(noteContext);
  const { deletenote } = context;
  const { note, updatenote } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <img src={about} className="card-img-top" alt="Card" />
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className="card-text">{note.tag}</p>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deletenote(note._id);
              }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square mx-2"
              onClick={() => {
                updatenote(note);
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
