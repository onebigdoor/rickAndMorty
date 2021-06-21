import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import Characters from './screens/Characters';

const App = () => {
  const link = createHttpLink({uri: 'https://rickandmortyapi.com/graphql'});
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link,
    cache,
    resolvers: {},
  });
  return (
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
  );
};

export default App;
