/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Id representation, based on Mongo Object Ids */
  ObjID: any;
};

/**
 * extend type Subscription {
 *   sectionCreated: Section
 *   sectionUpdated: Section
 *   sectionRemoved: ObjID
 * }
 */
export type Chapter = {
  __typename?: 'Chapter';
  id: Scalars['Int'];
  number?: Maybe<Scalars['Float']>;
  section: Section;
  sections: Array<Section>;
  title: Scalars['String'];
};


/**
 * extend type Subscription {
 *   sectionCreated: Section
 *   sectionUpdated: Section
 *   sectionRemoved: ObjID
 * }
 */
export type ChapterSectionArgs = {
  number: Scalars['Int'];
};


/**
 * extend type Subscription {
 *   sectionCreated: Section
 *   sectionUpdated: Section
 *   sectionRemoved: ObjID
 * }
 */
export type ChapterSectionsArgs = {
  lastCreatedAt?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type CreateChapterInput = {
  number: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateReviewInput = {
  stars?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
};

export type CreateSectionInput = {
  belongsTo?: InputMaybe<Package>;
  chapterId: Scalars['Int'];
  content: Scalars['String'];
  number: Scalars['Int'];
  title: Scalars['String'];
  views: Scalars['Int'];
};

export type CreateUserInput = {
  authId: Scalars['String'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  associateCheckoutSession?: Maybe<User>;
  associateSignupToken?: Maybe<User>;
  createChapter?: Maybe<Chapter>;
  createCheckoutSession: Scalars['ID'];
  createReview?: Maybe<Review>;
  createSection?: Maybe<Section>;
  createUser?: Maybe<User>;
  favoriteReview?: Maybe<Review>;
  joinTeam?: Maybe<Team>;
  orderTshirt?: Maybe<User>;
  removeChapter?: Maybe<Scalars['Boolean']>;
  removeReview?: Maybe<Scalars['Boolean']>;
  removeSection?: Maybe<Scalars['Boolean']>;
  removeUser?: Maybe<Scalars['Boolean']>;
  unsubscribe?: Maybe<Scalars['Boolean']>;
  updateChapter?: Maybe<Chapter>;
  updateMyData?: Maybe<User>;
  updateReview?: Maybe<Review>;
  updateSection?: Maybe<Section>;
  updateUser?: Maybe<User>;
  viewedSection?: Maybe<Section>;
  /** A placeholder, please ignore */
  xxx?: Maybe<Scalars['Int']>;
};


export type MutationAssociateCheckoutSessionArgs = {
  sessionId: Scalars['ID'];
};


export type MutationAssociateSignupTokenArgs = {
  token: Scalars['String'];
};


export type MutationCreateChapterArgs = {
  input: CreateChapterInput;
};


export type MutationCreateCheckoutSessionArgs = {
  input: SessionInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationCreateSectionArgs = {
  input: CreateSectionInput;
};


export type MutationCreateUserArgs = {
  authSecret: Scalars['String'];
  input: CreateUserInput;
};


export type MutationFavoriteReviewArgs = {
  favorite: Scalars['Boolean'];
  id: Scalars['ObjID'];
};


export type MutationJoinTeamArgs = {
  urlToken: Scalars['String'];
};


export type MutationOrderTshirtArgs = {
  product: Shirt;
  size: Size;
};


export type MutationRemoveChapterArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['ObjID'];
};


export type MutationRemoveSectionArgs = {
  id: Scalars['ObjID'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ObjID'];
};


export type MutationUnsubscribeArgs = {
  token: Scalars['String'];
};


export type MutationUpdateChapterArgs = {
  id: Scalars['Int'];
  input: UpdateChapterInput;
};


export type MutationUpdateMyDataArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ObjID'];
  input: UpdateReviewInput;
};


export type MutationUpdateSectionArgs = {
  id: Scalars['ObjID'];
  input: UpdateSectionInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ObjID'];
  input: UpdateUserInput;
};


export type MutationViewedSectionArgs = {
  id: Scalars['String'];
};

export enum Package {
  Basic = 'BASIC',
  Full = 'FULL',
  Fullteam = 'FULLTEAM',
  Pro = 'PRO',
  Team = 'TEAM',
  Training = 'TRAINING'
}

export type Query = {
  __typename?: 'Query';
  chapter?: Maybe<Chapter>;
  chapterByNumber?: Maybe<Chapter>;
  chapterByTitle?: Maybe<Chapter>;
  chapters?: Maybe<Array<Chapter>>;
  currentUser?: Maybe<User>;
  githubStars?: Maybe<Scalars['Int']>;
  review?: Maybe<Review>;
  /** To paginate, use page, skip & limit, or after & limit */
  reviews?: Maybe<Array<Review>>;
  section?: Maybe<Section>;
  sections?: Maybe<Array<Section>>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
  /** A placeholder, please ignore */
  xxx?: Maybe<Scalars['Int']>;
};


export type QueryChapterArgs = {
  id: Scalars['Int'];
};


export type QueryChapterByNumberArgs = {
  number: Scalars['Int'];
};


export type QueryChapterByTitleArgs = {
  title: Scalars['String'];
};


export type QueryChaptersArgs = {
  lastCreatedAt?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryReviewArgs = {
  id: Scalars['ObjID'];
};


export type QueryReviewsArgs = {
  after?: InputMaybe<Scalars['ObjID']>;
  limit?: InputMaybe<Scalars['Int']>;
  minSentences?: InputMaybe<Scalars['Int']>;
  minStars?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReviewOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QuerySectionArgs = {
  id: Scalars['String'];
};


export type QuerySectionsArgs = {
  lastCreatedAt?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryTeamArgs = {
  urlToken: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ObjID'];
};

export type Review = {
  __typename?: 'Review';
  author: User;
  createdAt: Scalars['Float'];
  /** whether the current user has favorited this review */
  favorited?: Maybe<Scalars['Boolean']>;
  id: Scalars['ObjID'];
  stars?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Float'];
};

export enum ReviewOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export type Section = {
  __typename?: 'Section';
  chapterId: Scalars['Int'];
  content: Scalars['String'];
  id: Scalars['String'];
  next?: Maybe<Section>;
  number: Scalars['Int'];
  package?: Maybe<Package>;
  title?: Maybe<Scalars['String']>;
  views: Scalars['Int'];
};

export type SessionInput = {
  licenses?: InputMaybe<Scalars['Int']>;
  packageKey: Package;
};

export enum Shirt {
  Contoured = 'CONTOURED',
  Gray = 'GRAY',
  Navy = 'NAVY'
}

export enum Size {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xxl = 'XXL'
}

export type Subscription = {
  __typename?: 'Subscription';
  githubStars?: Maybe<Scalars['Int']>;
  reviewCreated?: Maybe<Review>;
  reviewDeleted?: Maybe<Scalars['ObjID']>;
  reviewUpdated?: Maybe<Review>;
  /** A placeholder, please ignore */
  xxx?: Maybe<Scalars['Int']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt: Scalars['Float'];
  id: Scalars['ObjID'];
  members: Array<Maybe<User>>;
  name: Scalars['String'];
  owner: User;
  packageType: Package;
  totalSeats: Scalars['Int'];
  updatedAt: Scalars['Float'];
  urlToken: Scalars['String'];
};

export type UpdateChapterInput = {
  title: Scalars['String'];
};

export type UpdateReviewInput = {
  stars?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
};

export type UpdateSectionInput = {
  belongsTo?: InputMaybe<Package>;
  chapterId: Scalars['Int'];
  content: Scalars['String'];
  number: Scalars['Int'];
  title: Scalars['String'];
  views: Scalars['Int'];
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

/**
 * extend type Subscription {
 *   chapterCreated: Chapter
 *   chapterUpdated: Chapter
 *   chapterRemoved: ObjID
 * }
 */
export type User = {
  __typename?: 'User';
  authId: Scalars['String'];
  createdAt: Scalars['Float'];
  ebookUrl?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  favoriteReviews?: Maybe<Array<Maybe<Review>>>;
  firstName?: Maybe<Scalars['String']>;
  hasPurchased?: Maybe<Package>;
  hasRead?: Maybe<Array<Maybe<Section>>>;
  hasTshirt?: Maybe<Scalars['String']>;
  id: Scalars['ObjID'];
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photo: Scalars['String'];
  shippingAddress?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt: Scalars['Float'];
  username: Scalars['String'];
};
