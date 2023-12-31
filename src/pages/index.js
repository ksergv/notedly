// import React and our routing dependencies
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// import our shared layout component
import Layout from '../components/Layout';

// import our routes
import Help from './help';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Note from './note';
import FullNote  from '../components/FullNote';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';
import EditNote from './edit';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

// define our routes
const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Help} />
        <Route exact path="/category/:Category" component={Home} />
        <PrivateRoute path="/mynotes/category/:Category" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/favorites/category/note/:id" component={Note} />
        <Route path="/note/:id" component={Note} />
        <Route path="/category/note/:id" component={Note} />
        <Route path="/mynotes/category/note/:id" component={Note} />
        <Route path="/fullnote/:id" component={FullNote} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/new" component={NewNote} />
        <PrivateRoute path="/edit/:id" component={EditNote} />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Pages;
