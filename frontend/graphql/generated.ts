import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AuthenticatedItem = User;

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createProgression?: Maybe<Progression>;
  createProgressions?: Maybe<Array<Maybe<Progression>>>;
  createSkill?: Maybe<Skill>;
  createSkills?: Maybe<Array<Maybe<Skill>>>;
  createTier?: Maybe<Tier>;
  createTiers?: Maybe<Array<Maybe<Tier>>>;
  createTrack?: Maybe<Track>;
  createTracks?: Maybe<Array<Maybe<Track>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteProgression?: Maybe<Progression>;
  deleteProgressions?: Maybe<Array<Maybe<Progression>>>;
  deleteSkill?: Maybe<Skill>;
  deleteSkills?: Maybe<Array<Maybe<Skill>>>;
  deleteTier?: Maybe<Tier>;
  deleteTiers?: Maybe<Array<Maybe<Tier>>>;
  deleteTrack?: Maybe<Track>;
  deleteTracks?: Maybe<Array<Maybe<Track>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean'];
  updateProgression?: Maybe<Progression>;
  updateProgressions?: Maybe<Array<Maybe<Progression>>>;
  updateSkill?: Maybe<Skill>;
  updateSkills?: Maybe<Array<Maybe<Skill>>>;
  updateTier?: Maybe<Tier>;
  updateTiers?: Maybe<Array<Maybe<Tier>>>;
  updateTrack?: Maybe<Track>;
  updateTracks?: Maybe<Array<Maybe<Track>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateProgressionArgs = {
  data: ProgressionCreateInput;
};


export type MutationCreateProgressionsArgs = {
  data: Array<ProgressionCreateInput>;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationCreateSkillsArgs = {
  data: Array<SkillCreateInput>;
};


export type MutationCreateTierArgs = {
  data: TierCreateInput;
};


export type MutationCreateTiersArgs = {
  data: Array<TierCreateInput>;
};


export type MutationCreateTrackArgs = {
  data: TrackCreateInput;
};


export type MutationCreateTracksArgs = {
  data: Array<TrackCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteProgressionArgs = {
  where: ProgressionWhereUniqueInput;
};


export type MutationDeleteProgressionsArgs = {
  where: Array<ProgressionWhereUniqueInput>;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationDeleteSkillsArgs = {
  where: Array<SkillWhereUniqueInput>;
};


export type MutationDeleteTierArgs = {
  where: TierWhereUniqueInput;
};


export type MutationDeleteTiersArgs = {
  where: Array<TierWhereUniqueInput>;
};


export type MutationDeleteTrackArgs = {
  where: TrackWhereUniqueInput;
};


export type MutationDeleteTracksArgs = {
  where: Array<TrackWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateProgressionArgs = {
  data: ProgressionUpdateInput;
  where: ProgressionWhereUniqueInput;
};


export type MutationUpdateProgressionsArgs = {
  data: Array<ProgressionUpdateArgs>;
};


export type MutationUpdateSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpdateSkillsArgs = {
  data: Array<SkillUpdateArgs>;
};


export type MutationUpdateTierArgs = {
  data: TierUpdateInput;
  where: TierWhereUniqueInput;
};


export type MutationUpdateTiersArgs = {
  data: Array<TierUpdateArgs>;
};


export type MutationUpdateTrackArgs = {
  data: TrackUpdateInput;
  where: TrackWhereUniqueInput;
};


export type MutationUpdateTracksArgs = {
  data: Array<TrackUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Progression = {
  __typename?: 'Progression';
  author?: Maybe<User>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  skill?: Maybe<Skill>;
  track?: Maybe<Track>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type ProgressionCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  skill?: InputMaybe<SkillRelateToOneForCreateInput>;
  track?: InputMaybe<TrackRelateToOneForCreateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type ProgressionManyRelationFilter = {
  every?: InputMaybe<ProgressionWhereInput>;
  none?: InputMaybe<ProgressionWhereInput>;
  some?: InputMaybe<ProgressionWhereInput>;
};

export type ProgressionOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  created?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updated?: InputMaybe<OrderDirection>;
};

export type ProgressionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProgressionWhereUniqueInput>>;
  create?: InputMaybe<Array<ProgressionCreateInput>>;
};

export type ProgressionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProgressionWhereUniqueInput>>;
  create?: InputMaybe<Array<ProgressionCreateInput>>;
  disconnect?: InputMaybe<Array<ProgressionWhereUniqueInput>>;
  set?: InputMaybe<Array<ProgressionWhereUniqueInput>>;
};

export type ProgressionUpdateArgs = {
  data: ProgressionUpdateInput;
  where: ProgressionWhereUniqueInput;
};

export type ProgressionUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  skill?: InputMaybe<SkillRelateToOneForUpdateInput>;
  track?: InputMaybe<TrackRelateToOneForUpdateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type ProgressionWhereInput = {
  AND?: InputMaybe<Array<ProgressionWhereInput>>;
  NOT?: InputMaybe<Array<ProgressionWhereInput>>;
  OR?: InputMaybe<Array<ProgressionWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  comment?: InputMaybe<StringFilter>;
  created?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  skill?: InputMaybe<SkillWhereInput>;
  track?: InputMaybe<TrackWhereInput>;
  updated?: InputMaybe<DateTimeNullableFilter>;
};

export type ProgressionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  progression?: Maybe<Progression>;
  progressions?: Maybe<Array<Progression>>;
  progressionsCount?: Maybe<Scalars['Int']>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']>;
  tier?: Maybe<Tier>;
  tiers?: Maybe<Array<Tier>>;
  tiersCount?: Maybe<Scalars['Int']>;
  track?: Maybe<Track>;
  tracks?: Maybe<Array<Track>>;
  tracksCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryProgressionArgs = {
  where: ProgressionWhereUniqueInput;
};


export type QueryProgressionsArgs = {
  orderBy?: Array<ProgressionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProgressionWhereInput;
};


export type QueryProgressionsCountArgs = {
  where?: ProgressionWhereInput;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
};


export type QuerySkillsArgs = {
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SkillWhereInput;
};


export type QuerySkillsCountArgs = {
  where?: SkillWhereInput;
};


export type QueryTierArgs = {
  where: TierWhereUniqueInput;
};


export type QueryTiersArgs = {
  orderBy?: Array<TierOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TierWhereInput;
};


export type QueryTiersCountArgs = {
  where?: TierWhereInput;
};


export type QueryTrackArgs = {
  where: TrackWhereUniqueInput;
};


export type QueryTracksArgs = {
  orderBy?: Array<TrackOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TrackWhereInput;
};


export type QueryTracksCountArgs = {
  where?: TrackWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type Skill = {
  __typename?: 'Skill';
  author?: Maybe<User>;
  created?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  tiers?: Maybe<Array<Tier>>;
  tiersCount?: Maybe<Scalars['Int']>;
  tracks?: Maybe<Array<Track>>;
  tracksCount?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['DateTime']>;
};


export type SkillTiersArgs = {
  orderBy?: Array<TierOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TierWhereInput;
};


export type SkillTiersCountArgs = {
  where?: TierWhereInput;
};


export type SkillTracksArgs = {
  orderBy?: Array<TrackOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TrackWhereInput;
};


export type SkillTracksCountArgs = {
  where?: TrackWhereInput;
};

export type SkillCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tiers?: InputMaybe<TierRelateToManyForCreateInput>;
  tracks?: InputMaybe<TrackRelateToManyForCreateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type SkillManyRelationFilter = {
  every?: InputMaybe<SkillWhereInput>;
  none?: InputMaybe<SkillWhereInput>;
  some?: InputMaybe<SkillWhereInput>;
};

export type SkillOrderByInput = {
  created?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updated?: InputMaybe<OrderDirection>;
};

export type SkillRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  create?: InputMaybe<Array<SkillCreateInput>>;
};

export type SkillRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  create?: InputMaybe<Array<SkillCreateInput>>;
  disconnect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  set?: InputMaybe<Array<SkillWhereUniqueInput>>;
};

export type SkillRelateToOneForCreateInput = {
  connect?: InputMaybe<SkillWhereUniqueInput>;
  create?: InputMaybe<SkillCreateInput>;
};

export type SkillRelateToOneForUpdateInput = {
  connect?: InputMaybe<SkillWhereUniqueInput>;
  create?: InputMaybe<SkillCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SkillUpdateArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};

export type SkillUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tiers?: InputMaybe<TierRelateToManyForUpdateInput>;
  tracks?: InputMaybe<TrackRelateToManyForUpdateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type SkillWhereInput = {
  AND?: InputMaybe<Array<SkillWhereInput>>;
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  OR?: InputMaybe<Array<SkillWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  created?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  tiers?: InputMaybe<TierManyRelationFilter>;
  tracks?: InputMaybe<TrackManyRelationFilter>;
  updated?: InputMaybe<DateTimeNullableFilter>;
};

export type SkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tier = {
  __typename?: 'Tier';
  author?: Maybe<User>;
  created?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  skill?: Maybe<Skill>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type TierCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skill?: InputMaybe<SkillRelateToOneForCreateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type TierManyRelationFilter = {
  every?: InputMaybe<TierWhereInput>;
  none?: InputMaybe<TierWhereInput>;
  some?: InputMaybe<TierWhereInput>;
};

export type TierOrderByInput = {
  created?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updated?: InputMaybe<OrderDirection>;
};

export type TierRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TierWhereUniqueInput>>;
  create?: InputMaybe<Array<TierCreateInput>>;
};

export type TierRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TierWhereUniqueInput>>;
  create?: InputMaybe<Array<TierCreateInput>>;
  disconnect?: InputMaybe<Array<TierWhereUniqueInput>>;
  set?: InputMaybe<Array<TierWhereUniqueInput>>;
};

export type TierUpdateArgs = {
  data: TierUpdateInput;
  where: TierWhereUniqueInput;
};

export type TierUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skill?: InputMaybe<SkillRelateToOneForUpdateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type TierWhereInput = {
  AND?: InputMaybe<Array<TierWhereInput>>;
  NOT?: InputMaybe<Array<TierWhereInput>>;
  OR?: InputMaybe<Array<TierWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  created?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  skill?: InputMaybe<SkillWhereInput>;
  updated?: InputMaybe<DateTimeNullableFilter>;
};

export type TierWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Track = {
  __typename?: 'Track';
  asignees?: Maybe<Array<User>>;
  asigneesCount?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
  created?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
};


export type TrackAsigneesArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type TrackAsigneesCountArgs = {
  where?: UserWhereInput;
};


export type TrackSkillsArgs = {
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SkillWhereInput;
};


export type TrackSkillsCountArgs = {
  where?: SkillWhereInput;
};

export type TrackCreateInput = {
  asignees?: InputMaybe<UserRelateToManyForCreateInput>;
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<SkillRelateToManyForCreateInput>;
  status?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type TrackManyRelationFilter = {
  every?: InputMaybe<TrackWhereInput>;
  none?: InputMaybe<TrackWhereInput>;
  some?: InputMaybe<TrackWhereInput>;
};

export type TrackOrderByInput = {
  created?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updated?: InputMaybe<OrderDirection>;
};

export type TrackRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TrackWhereUniqueInput>>;
  create?: InputMaybe<Array<TrackCreateInput>>;
};

export type TrackRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TrackWhereUniqueInput>>;
  create?: InputMaybe<Array<TrackCreateInput>>;
  disconnect?: InputMaybe<Array<TrackWhereUniqueInput>>;
  set?: InputMaybe<Array<TrackWhereUniqueInput>>;
};

export type TrackRelateToOneForCreateInput = {
  connect?: InputMaybe<TrackWhereUniqueInput>;
  create?: InputMaybe<TrackCreateInput>;
};

export type TrackRelateToOneForUpdateInput = {
  connect?: InputMaybe<TrackWhereUniqueInput>;
  create?: InputMaybe<TrackCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type TrackUpdateArgs = {
  data: TrackUpdateInput;
  where: TrackWhereUniqueInput;
};

export type TrackUpdateInput = {
  asignees?: InputMaybe<UserRelateToManyForUpdateInput>;
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<SkillRelateToManyForUpdateInput>;
  status?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type TrackWhereInput = {
  AND?: InputMaybe<Array<TrackWhereInput>>;
  NOT?: InputMaybe<Array<TrackWhereInput>>;
  OR?: InputMaybe<Array<TrackWhereInput>>;
  asignees?: InputMaybe<UserManyRelationFilter>;
  author?: InputMaybe<UserWhereInput>;
  created?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  skills?: InputMaybe<SkillManyRelationFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updated?: InputMaybe<DateTimeNullableFilter>;
};

export type TrackWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  assignedTracks?: Maybe<Array<Track>>;
  assignedTracksCount?: Maybe<Scalars['Int']>;
  createdTracks?: Maybe<Array<Track>>;
  createdTracksCount?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
  passwordResetToken?: Maybe<PasswordState>;
  progressions?: Maybe<Array<Progression>>;
  progressionsCount?: Maybe<Scalars['Int']>;
  registered?: Maybe<Scalars['DateTime']>;
};


export type UserAssignedTracksArgs = {
  orderBy?: Array<TrackOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TrackWhereInput;
};


export type UserAssignedTracksCountArgs = {
  where?: TrackWhereInput;
};


export type UserCreatedTracksArgs = {
  orderBy?: Array<TrackOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TrackWhereInput;
};


export type UserCreatedTracksCountArgs = {
  where?: TrackWhereInput;
};


export type UserProgressionsArgs = {
  orderBy?: Array<ProgressionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProgressionWhereInput;
};


export type UserProgressionsCountArgs = {
  where?: ProgressionWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  assignedTracks?: InputMaybe<TrackRelateToManyForCreateInput>;
  createdTracks?: InputMaybe<TrackRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  progressions?: InputMaybe<ProgressionRelateToManyForCreateInput>;
  registered?: InputMaybe<Scalars['DateTime']>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
  registered?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  assignedTracks?: InputMaybe<TrackRelateToManyForUpdateInput>;
  createdTracks?: InputMaybe<TrackRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  progressions?: InputMaybe<ProgressionRelateToManyForUpdateInput>;
  registered?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedTracks?: InputMaybe<TrackManyRelationFilter>;
  createdTracks?: InputMaybe<TrackManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  progressions?: InputMaybe<ProgressionManyRelationFilter>;
  registered?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type PublicUserFieldsFragment = { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null };

export type CurrentUserFieldsFragment = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type RequiredAppDataQueryFieldsFragment = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', item: { __typename?: 'User', id: string, email?: string | null, firstName?: string | null, lastName?: string | null } } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', endSession: boolean };

export type PasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type PasswordResetMutation = { __typename?: 'Mutation', redeemUserPasswordResetToken?: { __typename?: 'RedeemUserPasswordResetTokenResult', code: PasswordResetRedemptionErrorCode, message: string } | null };

export type SendUserPasswordResetLinkMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendUserPasswordResetLinkMutation = { __typename?: 'Mutation', sendUserPasswordResetLink: boolean };

export type SignUpMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type LoginPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type ResetPasswordPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ResetPasswordPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type ResetPasswordRequestPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ResetPasswordRequestPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type SignUpPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SignUpPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type UserPageQueryVariables = Exact<{ [key: string]: never; }>;


export type UserPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, registered?: any | null }> | null };

export const PublicUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<PublicUserFieldsFragment, unknown>;
export const CurrentUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"currentUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CurrentUserFieldsFragment, unknown>;
export const RequiredAppDataQueryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"requiredAppDataQueryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"currentUserFields"}}]}},...CurrentUserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<RequiredAppDataQueryFieldsFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endSession"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const PasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"passwordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"redeemUserPasswordResetToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<PasswordResetMutation, PasswordResetMutationVariables>;
export const SendUserPasswordResetLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendUserPasswordResetLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendUserPasswordResetLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SendUserPasswordResetLinkMutation, SendUserPasswordResetLinkMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const LoginPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loginPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<LoginPageQuery, LoginPageQueryVariables>;
export const ResetPasswordPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"resetPasswordPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ResetPasswordPageQuery, ResetPasswordPageQueryVariables>;
export const ResetPasswordRequestPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"resetPasswordRequestPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ResetPasswordRequestPageQuery, ResetPasswordRequestPageQueryVariables>;
export const SignUpPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signUpPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<SignUpPageQuery, SignUpPageQueryVariables>;
export const UserPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserPageQuery, UserPageQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"registered"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;