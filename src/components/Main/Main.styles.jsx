import styled from "styled-components";

export const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 5px;
`;

export const NoteCard = styled.div`
  min-height: 200px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
`;

export const AddNoteCard = styled(NoteCard)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.primary};
`;

export const CardInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  outline: none;
  color: ${(props) => props.theme.text};
`;

export const CardDescription = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  padding: 5px 10px;
  color: ${(props) => props.theme.text};
`;

export const CardHeader = styled.div`
  text-overflow: clip;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardButton = styled.button`
  padding: 0.5rem;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 0.3rem;
`;
