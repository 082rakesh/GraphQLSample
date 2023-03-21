import {ApolloClient, InMemoryCache} from '@apollo/client';

// HTTPLink also can be used in case of setting up a more configuration.

// const httpLink = new HttpLink({
//   uri: 'https://spacex-production.up.railway.app/',
// });

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache,
});
