import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import useLocalStorage from "../../hooks/useLocalStorage.jsx";
import {
  NotesContainer,
  NoteCard,
  AddNoteCard,
  CardInput,
  CardDescription,
  CardHeader,
  CardFooter,
  CardButton,
} from "./Main.styles.jsx";

export default function Main() {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const [allNotes, setAllNotes] = useLocalStorage("Notes", []);

  const handleChange = (e, field) => {
    setNote((prev) => {
      return { ...prev, [field]: e.target.value };
    });
  };

  const handleClick = () => {
    const newNote = { ...note, id: nanoid(), date: getDate() };
    setAllNotes((prev) => [...prev, newNote]);
    setNote({
      title: "",
      description: "",
    });
  };

  const removeNote = (idToRemove) => {
    setAllNotes(allNotes.filter((note) => note.id !== idToRemove));
  };

  const getDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  return (
    <main className="main">
      <NotesContainer>
        {allNotes?.map(({ title, description, id, date }) => {
          return (
            <NoteCard>
              <CardHeader>
                <h1 className="title">{title}</h1>
                <p className="text">{description}</p>
              </CardHeader>
              <CardFooter>
                <small>{date}</small>
                <CardButton onClick={() => removeNote(id)}>delete</CardButton>
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
            value={note.title}
          />
          <CardDescription
            cols="20"
            rows="8"
            placeholder="Type to add a note..."
            onChange={(e) => handleChange(e, "description")}
            maxLength={200}
            value={note.description}
          />
          <CardFooter>
            <small>17/10/2024</small>
            <CardButton onClick={handleClick}>save</CardButton>
          </CardFooter>
        </AddNoteCard>
      </NotesContainer>
    </main>
  );
}
