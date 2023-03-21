/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchList
// ====================================================

export interface LaunchList_launches {
  __typename: "Launch";
  details: string | null;
}

export interface LaunchList {
  launches: (LaunchList_launches | null)[] | null;
}

export interface LaunchListVariables {
  limit?: number | null;
}
