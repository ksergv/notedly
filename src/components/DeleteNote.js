import React from 'react';
import { useMutation } from '@apollo/client';

import ButtonAsLink from './ButtonAsLink';
import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import { useHistory } from 'react-router-dom';





const DeleteNote = props => {
  const history = useHistory(); // Используйте useHistory из react-router-dom
  const {
    category
} = props;

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId
    },
    // refetch the note list queries to update the cache
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: () => {
      // redirect the user to the "my notes" page
      history.push(`/mynotes/category/${category}`);

    }
  });

  return <ButtonAsLink onClick={deleteNote}>Удалить заметку</ButtonAsLink>;
};

export default DeleteNote;
