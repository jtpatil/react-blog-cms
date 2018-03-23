import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

const API = 'https://api.graphcms.com/simple/v1/cjf3cuoxo23us015227enjpg9';

const client = new ApolloClient({
    link: new HttpLink({uri: API}),
    cache: new InMemoryCache()
});

ReactDOM.render(
 <ApolloProvider client={client}>
    <App /> 
 </ApolloProvider>,
document.getElementById('root'));
registerServiceWorker();
