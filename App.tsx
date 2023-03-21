/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import MainNavigation from './src/navigation/Navigator';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/graphql/graphql';

function App() {
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
}

export default App;
