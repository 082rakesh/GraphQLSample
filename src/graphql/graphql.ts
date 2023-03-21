import {ApolloClient, InMemoryCache} from '@apollo/client';

// const httpLink = new HttpLink({
//   uri: 'https://spacex-production.up.railway.app/',
// });

// export const client: ApolloClient = new ApolloClient({
//   uri: 'https://spacex-production.up.railway.app/',
//   cache: new InMemoryCache({
//     addTypename: false,
//   }),
// });

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache,
});
