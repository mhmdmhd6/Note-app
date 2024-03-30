import { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
  const [note, setNote] = useState({ title: "", description: "" });
  const [allNotes, setAllNotes] = useState([
    { title: "note1", description: "Hello, this is a note" },
    { title: "note2", description: "Hello, this is a note2" },
    { title: "note3", description: "Hello this is the third note" },
  ]);

  const handleChange = (e, field) => {
    setNote({ ...note, [field]: e.target.value });
  };

  const handleClick = () => {
    setAllNotes([...allNotes, note]);
  };

  return (
    <main className="main">
      <div className="main__notes">
        {allNotes.map(({ title, description }) => {
          return (
            <div className="main__note__card">
              <div className="card__header">
                <h1 className="title">{title}</h1>
                <p className="text">{description}</p>
              </div>
              <div className="card__footer">
                <small>10/20/2003</small>
                <button>delete</button>
              </div>
            </div>
          );
        })}
        <div className="main__note__card add">
          <input
            type="text"
            placeholder="title"
            onChange={(e) => handleChange(e, "title")}
            maxLength={50}
          />
          <textarea
            cols="20"
            rows="8"
            placeholder="type to add a note..."
            onChange={(e) => handleChange(e, "description")}
            maxLength={200}
          ></textarea>
          <div className="card__footer">
            <small>17/10/2024</small>
            <button onClick={handleClick}>save</button>
          </div>
        </div>
      </div>
    </main>
  );
}
