import { gql } from '@apollo/client';

const NEW_NOTE = gql`
mutation newNote($private:Boolean,  $category:String!, $content: String!) {
  newNote(private: $private, category: $category, content: $content) {
      id
      private
      category
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const EDIT_NOTE = gql`
  mutation updateNote($id: ID!,$private:Boolean, $content: String!) {
    updateNote(id: $id, private: $private, content: $content) {
      id
      private
      category
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export {
  NEW_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE,
  SIGNIN_USER,
  SIGNUP_USER
};
