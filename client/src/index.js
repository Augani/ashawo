import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/css/tailwind.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql/',
});

const Wrapper = function(){
    return (
        <Provider store={Store}>
            <App/>
        </Provider>
    )
}
ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
