import {gql} from '@apollo/client';

export const LAUNCH_LIST = gql`
  query LaunchList($limit: Int) {
    launches(limit: $limit) {
      details
    }
  }
`;

/*
export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      details
      mission_name
      launch_year
      launch_site {
        site_name
      }
      launch_date_unix
    }
  }
`;

export const GET_HISTORIES = gql`
  query GetHistories() {
    histories() {
      id
      details
      event_date_utc
        flight {
            id
            details
             mission_name
        }
    }
  }
`;

export const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

const httpLink = new HttpLink({
  uri: 'https://api.graphql.guide/graphql',
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launches(limit: $limit) {
      id
      details
      mission_name
      launch_year
      launch_site {
        site_name
      }
      launch_date_unix
    }
  }
`;

*/
