import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Addnote() {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const context = useContext(noteContext);
  const { addnote } = context;
  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            minLength={5}
            required
            value={note.tag}
          />
        </div>
        <button
          disabled={
            note.title.length < 5 ||
            note.tag.length < 5 ||
            note.description.length < 5
          }
          type="submit"
          className="btn btn-primary"
          onClick={handleclick}
        >
          Add Note
        </button>
        <Link className="btn btn-primary mx-1" to="/login" role="button">
          Logout
        </Link>
      </form>
      <h2 className="my-3">Your Notes</h2>
    </div>
  );
}
