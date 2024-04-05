import { useState } from "react";
import {
  NotesContainer,
  NoteCard,
  AddNoteCard,
  CardInput,
  CardDescription,
  CardHeader,
  CardFooter,
} from "./Main.styles.jsx";

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
      <NotesContainer>
        {allNotes.map(({ title, description }) => {
          return (
            <NoteCard>
              <CardHeader>
                <h1 className="title">{title}</h1>
                <p className="text">{description}</p>
              </CardHeader>
              <CardFooter>
                <small>10/20/2003</small>
                <button>delete</button>
              </CardFooter>
            </NoteCard>
          );
        })}
        <AddNoteCard>
          <CardInput
            type="text"
            placeholder="Type a Title..."
            onChange={(e) => handleChange(e, "title")}
            maxLength={50}
          />
          <CardDescription
            cols="20"
            rows="8"
            placeholder="Type to add a note..."
            onChange={(e) => handleChange(e, "description")}
            maxLength={200}
          ></CardDescription>
          <CardFooter>
            <small>17/10/2024</small>
            <button onClick={handleClick}>save</button>
          </CardFooter>
        </AddNoteCard>
      </NotesContainer>
    </main>
  );
}
