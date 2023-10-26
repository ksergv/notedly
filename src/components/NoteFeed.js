import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

import Note from './Note';

const NoteFeed = ({ notes }) => {
  const Privat = (notes)=>{
   return notes.filter(item => item.private === false)
  }
   const filteredNotes = Privat(notes); // Сохраните отфильтрованный массив в новой переменной
 
  return (
    <div className="note-feed">
    {filteredNotes.map(note => (
          <NoteWrapper key={note.id}>
            <Note note={note} />
            <Link to={`note/${note.id}`}>Посмотреть!</Link>
          </NoteWrapper>
        ))
    }
      
    </div>
  );
};

export default NoteFeed;
