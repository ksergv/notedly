import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import NoteFeedMe from '../components/NoteFeedMe';
import { GET_MY_NOTES } from '../gql/query';
import { useParams } from 'react-router-dom';

const MyNotes = () => {
  useEffect(() => {
    // update the document title
    document.title = 'My Notes — Notedly';
  });

  // Используем хук useParams для доступа к параметрам в URL
  const { Category } = useParams();

  const { loading, error, data } = useQuery(GET_MY_NOTES);

  // if the data is loading, our app will display a loading message
  if (loading) return 'Loading...';
  // if there is an error fetching the data, display an error message
  if (error) return `Error! ${error.message}`;
  // if the query is successful and there are notes, return the feed of notes
  // else if the query is successful and there aren't notes, display a message
  const categoryNotes = data.me.notes.filter(item => item.category === Category);// заметки с выбранной категорией

  if (data.me.notes.length !== 0 ) {
    return <NoteFeedMe notes = {categoryNotes} />;
  } else {
    return <p>No notes yet</p>;
  }
};

export default MyNotes;
