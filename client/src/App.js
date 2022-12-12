import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

// import Profile from './pages/Profile';
import GoBack from './components/GoBack';
import Header from './components/Header';
import Navbars from './components/Navbar';
import Footing from './components/Footer';
import Contact from './pages/Contactus';
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Navbars />
        <br />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile/:username?">
              <Profile />
            </Route>
            <Route path="/me">
              <Profile />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
          <GoBack />
        </main>
        <Footing />

      </Router>
    </ApolloProvider>
  );
}

export default App;
