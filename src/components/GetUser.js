import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import DeleteNote from './DeleteNote';
import FavoriteNote from './FavoriteNote';
import { GET_ME } from '../gql/query';




const GetUser = props => {
    var isPrivateAuthor = false;
  const { loading, error, data } = useQuery(GET_ME);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  if (data.me.id === props.note.author.id) {
    isPrivateAuthor = true;
  }
  if (data.me.id === undefined)(
   isPrivateAuthor=false
  )
  return isPrivateAuthor;
};

export default GetUser;
