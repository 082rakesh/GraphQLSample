import {gql} from '@apollo/client';

export const LAUNCH_LIST = gql`
  query LaunchList($limit: Int) {
    launches(limit: $limit) {
      details
    }
  }
`;
