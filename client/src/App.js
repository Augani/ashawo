import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {Spinner} from 'evergreen-ui'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link} from "react-router-dom";
import Pages from './pages';


const client = new ApolloClient({
  uri: '/api/',
  cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
  {
   getUser(username: "augani"){
    _id,
    username,
    ratings,
    active
   }
  }
`;
const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

function App(props) {
  console.log(props)
  return (
    <Router >
    <Route render={({ location }) => (
    <TransitionGroup>
            <CSSTransition
             key={location.key}
                timeout={300}
                classNames='fade'
            >
      <Switch location={location}>
      <Route path="/home">
        {
          props.state.USER_LOGGED_IN?<Pages.Home/>: <Redirect to="/"/>
        }
      </Route>
      <Route path="/forgot">
         <Pages.Forgot/>
        </Route>
      <Route path="/onboard">
         <Pages.OnBoard/>
        </Route>
      <Route path="/signup">
         <Pages.MainPage/>
        </Route>
        <Route path="/">
         <Pages.Landing/>
        </Route>
      </Switch>
      </CSSTransition>
      </TransitionGroup>
    )}/>
  </Router>
  );
}


const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

const AppSet =  connect(mapStateToProps, mapDispatchToProps)(App);


function Wrap(){
  return (
      <ApolloProvider client={client}>
      <AppSet/>
      </ApolloProvider>
    
  )
}

export default Wrap;
