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

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
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

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Invitation = {
  __typename?: 'Invitation';
  accepted?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  email?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  expires?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
};

export type InvitationCreateInput = {
  accepted?: InputMaybe<Scalars['DateTime']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['DateTime']>;
};

export type InvitationManyRelationFilter = {
  every?: InputMaybe<InvitationWhereInput>;
  none?: InputMaybe<InvitationWhereInput>;
  some?: InputMaybe<InvitationWhereInput>;
};

export type InvitationOrderByInput = {
  accepted?: InputMaybe<OrderDirection>;
  created?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  expires?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type InvitationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  create?: InputMaybe<Array<InvitationCreateInput>>;
};

export type InvitationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  create?: InputMaybe<Array<InvitationCreateInput>>;
  disconnect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationWhereUniqueInput>>;
};

export type InvitationRelateToOneForCreateInput = {
  connect?: InputMaybe<InvitationWhereUniqueInput>;
  create?: InputMaybe<InvitationCreateInput>;
};

export type InvitationRelateToOneForUpdateInput = {
  connect?: InputMaybe<InvitationWhereUniqueInput>;
  create?: InputMaybe<InvitationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationUpdateArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateInput = {
  accepted?: InputMaybe<Scalars['DateTime']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['DateTime']>;
};

export type InvitationWhereInput = {
  AND?: InputMaybe<Array<InvitationWhereInput>>;
  NOT?: InputMaybe<Array<InvitationWhereInput>>;
  OR?: InputMaybe<Array<InvitationWhereInput>>;
  accepted?: InputMaybe<DateTimeNullableFilter>;
  created?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<StringFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
};

export type InvitationWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
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

export type Level = {
  __typename?: 'Level';
  author?: Maybe<User>;
  created?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  skill?: Maybe<Skill>;
  team?: Maybe<Team>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type LevelCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  skill?: InputMaybe<SkillRelateToOneForCreateInput>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type LevelManyRelationFilter = {
  every?: InputMaybe<LevelWhereInput>;
  none?: InputMaybe<LevelWhereInput>;
  some?: InputMaybe<LevelWhereInput>;
};

export type LevelOrderByInput = {
  created?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  level?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updated?: InputMaybe<OrderDirection>;
};

export type LevelRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LevelWhereUniqueInput>>;
  create?: InputMaybe<Array<LevelCreateInput>>;
};

export type LevelRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LevelWhereUniqueInput>>;
  create?: InputMaybe<Array<LevelCreateInput>>;
  disconnect?: InputMaybe<Array<LevelWhereUniqueInput>>;
  set?: InputMaybe<Array<LevelWhereUniqueInput>>;
};

export type LevelUpdateArgs = {
  data: LevelUpdateInput;
  where: LevelWhereUniqueInput;
};

export type LevelUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  skill?: InputMaybe<SkillRelateToOneForUpdateInput>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type LevelWhereInput = {
  AND?: InputMaybe<Array<LevelWhereInput>>;
  NOT?: InputMaybe<Array<LevelWhereInput>>;
  OR?: InputMaybe<Array<LevelWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  created?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  skill?: InputMaybe<SkillWhereInput>;
  team?: InputMaybe<TeamWhereInput>;
  updated?: InputMaybe<DateTimeNullableFilter>;
};

export type LevelWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInvitation?: Maybe<Invitation>;
  createInvitations?: Maybe<Array<Maybe<Invitation>>>;
  createLevel?: Maybe<Level>;
  createLevels?: Maybe<Array<Maybe<Level>>>;
  createRole?: Maybe<Role>;
  createRoles?: Maybe<Array<Maybe<Role>>>;
  createSkill?: Maybe<Skill>;
  createSkills?: Maybe<Array<Maybe<Skill>>>;
  createTeam?: Maybe<Team>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteInvitation?: Maybe<Invitation>;
  deleteInvitations?: Maybe<Array<Maybe<Invitation>>>;
  deleteLevel?: Maybe<Level>;
  deleteLevels?: Maybe<Array<Maybe<Level>>>;
  deleteRole?: Maybe<Role>;
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  deleteSkill?: Maybe<Skill>;
  deleteSkills?: Maybe<Array<Maybe<Skill>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean'];
  updateInvitation?: Maybe<Invitation>;
  updateInvitations?: Maybe<Array<Maybe<Invitation>>>;
  updateLevel?: Maybe<Level>;
  updateLevels?: Maybe<Array<Maybe<Level>>>;
  updateRole?: Maybe<Role>;
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  updateSkill?: Maybe<Skill>;
  updateSkills?: Maybe<Array<Maybe<Skill>>>;
  updateTeam?: Maybe<Team>;
  updateTeams?: Maybe<Array<Maybe<Team>>>;
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


export type MutationCreateInvitationArgs = {
  data: InvitationCreateInput;
};


export type MutationCreateInvitationsArgs = {
  data: Array<InvitationCreateInput>;
};


export type MutationCreateLevelArgs = {
  data: LevelCreateInput;
};


export type MutationCreateLevelsArgs = {
  data: Array<LevelCreateInput>;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateRolesArgs = {
  data: Array<RoleCreateInput>;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationCreateSkillsArgs = {
  data: Array<SkillCreateInput>;
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateTeamsArgs = {
  data: Array<TeamCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type MutationDeleteInvitationsArgs = {
  where: Array<InvitationWhereUniqueInput>;
};


export type MutationDeleteLevelArgs = {
  where: LevelWhereUniqueInput;
};


export type MutationDeleteLevelsArgs = {
  where: Array<LevelWhereUniqueInput>;
};


export type MutationDeleteRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationDeleteRolesArgs = {
  where: Array<RoleWhereUniqueInput>;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationDeleteSkillsArgs = {
  where: Array<SkillWhereUniqueInput>;
};


export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteTeamsArgs = {
  where: Array<TeamWhereUniqueInput>;
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


export type MutationUpdateInvitationArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};


export type MutationUpdateInvitationsArgs = {
  data: Array<InvitationUpdateArgs>;
};


export type MutationUpdateLevelArgs = {
  data: LevelUpdateInput;
  where: LevelWhereUniqueInput;
};


export type MutationUpdateLevelsArgs = {
  data: Array<LevelUpdateArgs>;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateRolesArgs = {
  data: Array<RoleUpdateArgs>;
};


export type MutationUpdateSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpdateSkillsArgs = {
  data: Array<SkillUpdateArgs>;
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateTeamsArgs = {
  data: Array<TeamUpdateArgs>;
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

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  invitation?: Maybe<Invitation>;
  invitations?: Maybe<Array<Invitation>>;
  invitationsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  level?: Maybe<Level>;
  levels?: Maybe<Array<Level>>;
  levelsCount?: Maybe<Scalars['Int']>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesCount?: Maybe<Scalars['Int']>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Team>>;
  teamsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type QueryInvitationsArgs = {
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: InvitationWhereInput;
};


export type QueryInvitationsCountArgs = {
  where?: InvitationWhereInput;
};


export type QueryLevelArgs = {
  where: LevelWhereUniqueInput;
};


export type QueryLevelsArgs = {
  orderBy?: Array<LevelOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LevelWhereInput;
};


export type QueryLevelsCountArgs = {
  where?: LevelWhereInput;
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryRolesArgs = {
  orderBy?: Array<RoleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RoleWhereInput;
};


export type QueryRolesCountArgs = {
  where?: RoleWhereInput;
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


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TeamWhereInput;
};


export type QueryTeamsCountArgs = {
  where?: TeamWhereInput;
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

export type Role = {
  __typename?: 'Role';
  asignees?: Maybe<Array<User>>;
  asigneesCount?: Maybe<Scalars['Int']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type RoleAsigneesArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type RoleAsigneesCountArgs = {
  where?: UserWhereInput;
};

export type RoleCreateInput = {
  asignees?: InputMaybe<UserRelateToManyForCreateInput>;
  canManageRoles?: InputMaybe<Scalars['Boolean']>;
  canManageUsers?: InputMaybe<Scalars['Boolean']>;
  canSeeOtherUsers?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoleOrderByInput = {
  canManageRoles?: InputMaybe<OrderDirection>;
  canManageUsers?: InputMaybe<OrderDirection>;
  canSeeOtherUsers?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type RoleRelateToOneForCreateInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  create?: InputMaybe<RoleCreateInput>;
};

export type RoleRelateToOneForUpdateInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  create?: InputMaybe<RoleCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type RoleUpdateArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateInput = {
  asignees?: InputMaybe<UserRelateToManyForUpdateInput>;
  canManageRoles?: InputMaybe<Scalars['Boolean']>;
  canManageUsers?: InputMaybe<Scalars['Boolean']>;
  canSeeOtherUsers?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  asignees?: InputMaybe<UserManyRelationFilter>;
  canManageRoles?: InputMaybe<BooleanFilter>;
  canManageUsers?: InputMaybe<BooleanFilter>;
  canSeeOtherUsers?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Skill = {
  __typename?: 'Skill';
  author?: Maybe<User>;
  created?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  levels?: Maybe<Array<Level>>;
  levelsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
  updated?: Maybe<Scalars['DateTime']>;
};


export type SkillLevelsArgs = {
  orderBy?: Array<LevelOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LevelWhereInput;
};


export type SkillLevelsCountArgs = {
  where?: LevelWhereInput;
};

export type SkillCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<LevelRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<TeamRelateToOneForCreateInput>;
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
  levels?: InputMaybe<LevelRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<TeamRelateToOneForUpdateInput>;
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
  levels?: InputMaybe<LevelManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamWhereInput>;
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

export type Team = {
  __typename?: 'Team';
  author?: Maybe<User>;
  created?: Maybe<Scalars['DateTime']>;
  currentUserIsAuthor?: Maybe<Scalars['Boolean']>;
  currentUserIsManager?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  levels?: Maybe<Array<Level>>;
  levelsCount?: Maybe<Scalars['Int']>;
  managers?: Maybe<Array<User>>;
  managersCount?: Maybe<Scalars['Int']>;
  members?: Maybe<Array<User>>;
  membersCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['DateTime']>;
};


export type TeamLevelsArgs = {
  orderBy?: Array<LevelOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LevelWhereInput;
};


export type TeamLevelsCountArgs = {
  where?: LevelWhereInput;
};


export type TeamManagersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type TeamManagersCountArgs = {
  where?: UserWhereInput;
};


export type TeamMembersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type TeamMembersCountArgs = {
  where?: UserWhereInput;
};


export type TeamSkillsArgs = {
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SkillWhereInput;
};


export type TeamSkillsCountArgs = {
  where?: SkillWhereInput;
};

export type TeamCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<LevelRelateToManyForCreateInput>;
  managers?: InputMaybe<UserRelateToManyForCreateInput>;
  members?: InputMaybe<UserRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<SkillRelateToManyForCreateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type TeamManyRelationFilter = {
  every?: InputMaybe<TeamWhereInput>;
  none?: InputMaybe<TeamWhereInput>;
  some?: InputMaybe<TeamWhereInput>;
};

export type TeamOrderByInput = {
  created?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updated?: InputMaybe<OrderDirection>;
};

export type TeamRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamCreateInput>>;
};

export type TeamRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamCreateInput>>;
  disconnect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamWhereUniqueInput>>;
};

export type TeamRelateToOneForCreateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
};

export type TeamRelateToOneForUpdateInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  create?: InputMaybe<TeamCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type TeamUpdateArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<LevelRelateToManyForUpdateInput>;
  managers?: InputMaybe<UserRelateToManyForUpdateInput>;
  members?: InputMaybe<UserRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<SkillRelateToManyForUpdateInput>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  created?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  levels?: InputMaybe<LevelManyRelationFilter>;
  managers?: InputMaybe<UserManyRelationFilter>;
  members?: InputMaybe<UserManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  skills?: InputMaybe<SkillManyRelationFilter>;
  updated?: InputMaybe<DateTimeNullableFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  /**  Return all teams a user is assigned to  */
  allUserTeams?: Maybe<Array<Maybe<Team>>>;
  assignedTeams?: Maybe<Array<Team>>;
  assignedTeamsCount?: Maybe<Scalars['Int']>;
  authoredLevels?: Maybe<Array<Level>>;
  authoredLevelsCount?: Maybe<Scalars['Int']>;
  authoredSkills?: Maybe<Array<Skill>>;
  authoredSkillsCount?: Maybe<Scalars['Int']>;
  authoredTeams?: Maybe<Array<Team>>;
  authoredTeamsCount?: Maybe<Scalars['Int']>;
  createdInvitations?: Maybe<Array<Invitation>>;
  createdInvitationsCount?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invitation?: Maybe<Invitation>;
  lastName?: Maybe<Scalars['String']>;
  managedTeams?: Maybe<Array<Team>>;
  managedTeamsCount?: Maybe<Scalars['Int']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
  passwordResetToken?: Maybe<PasswordState>;
  registered?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Role>;
};


export type UserAssignedTeamsArgs = {
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TeamWhereInput;
};


export type UserAssignedTeamsCountArgs = {
  where?: TeamWhereInput;
};


export type UserAuthoredLevelsArgs = {
  orderBy?: Array<LevelOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LevelWhereInput;
};


export type UserAuthoredLevelsCountArgs = {
  where?: LevelWhereInput;
};


export type UserAuthoredSkillsArgs = {
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SkillWhereInput;
};


export type UserAuthoredSkillsCountArgs = {
  where?: SkillWhereInput;
};


export type UserAuthoredTeamsArgs = {
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TeamWhereInput;
};


export type UserAuthoredTeamsCountArgs = {
  where?: TeamWhereInput;
};


export type UserCreatedInvitationsArgs = {
  orderBy?: Array<InvitationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: InvitationWhereInput;
};


export type UserCreatedInvitationsCountArgs = {
  where?: InvitationWhereInput;
};


export type UserManagedTeamsArgs = {
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TeamWhereInput;
};


export type UserManagedTeamsCountArgs = {
  where?: TeamWhereInput;
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
  assignedTeams?: InputMaybe<TeamRelateToManyForCreateInput>;
  authoredLevels?: InputMaybe<LevelRelateToManyForCreateInput>;
  authoredSkills?: InputMaybe<SkillRelateToManyForCreateInput>;
  authoredTeams?: InputMaybe<TeamRelateToManyForCreateInput>;
  createdInvitations?: InputMaybe<InvitationRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  invitation?: InputMaybe<InvitationRelateToOneForCreateInput>;
  lastName?: InputMaybe<Scalars['String']>;
  managedTeams?: InputMaybe<TeamRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  registered?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<RoleRelateToOneForCreateInput>;
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
  assignedTeams?: InputMaybe<TeamRelateToManyForUpdateInput>;
  authoredLevels?: InputMaybe<LevelRelateToManyForUpdateInput>;
  authoredSkills?: InputMaybe<SkillRelateToManyForUpdateInput>;
  authoredTeams?: InputMaybe<TeamRelateToManyForUpdateInput>;
  createdInvitations?: InputMaybe<InvitationRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  invitation?: InputMaybe<InvitationRelateToOneForUpdateInput>;
  lastName?: InputMaybe<Scalars['String']>;
  managedTeams?: InputMaybe<TeamRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  registered?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<RoleRelateToOneForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedTeams?: InputMaybe<TeamManyRelationFilter>;
  authoredLevels?: InputMaybe<LevelManyRelationFilter>;
  authoredSkills?: InputMaybe<SkillManyRelationFilter>;
  authoredTeams?: InputMaybe<TeamManyRelationFilter>;
  createdInvitations?: InputMaybe<InvitationManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  invitation?: InputMaybe<InvitationWhereInput>;
  lastName?: InputMaybe<StringFilter>;
  managedTeams?: InputMaybe<TeamManyRelationFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  registered?: InputMaybe<DateTimeNullableFilter>;
  role?: InputMaybe<RoleWhereInput>;
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

export type PublicUserFieldsFragment = { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null };

export type InvitationFieldsFragment = { __typename?: 'Invitation', id: string, email?: string | null, created?: any | null, expires?: any | null, expired?: boolean | null, accepted?: any | null };

export type TeamFieldsFragment = { __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null };

export type CurrentUserBasicFieldsFragment = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type CurrentUserTeamsFieldsFragment = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', allUserTeams?: Array<{ __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null } | null> | null, assignedTeams?: Array<{ __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null }> | null, authoredTeams?: Array<{ __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null }> | null, managedTeams?: Array<{ __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null }> | null } | null };

export type RequiredAppDataQueryFieldsFragment = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type AcceptInvitationAndCreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  accepted: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
}>;


export type AcceptInvitationAndCreateUserMutation = { __typename?: 'Mutation', updateInvitation?: { __typename?: 'Invitation', accepted?: any | null } | null, createUser?: { __typename?: 'User', id: string } | null };

export type CreateInvitationMutationVariables = Exact<{
  email: Scalars['String'];
  expires: Scalars['DateTime'];
  userID: Scalars['ID'];
}>;


export type CreateInvitationMutation = { __typename?: 'Mutation', createInvitation?: { __typename?: 'Invitation', id: string, email?: string | null } | null };

export type CreateLevelMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
  teamId: Scalars['ID'];
  skillId: Scalars['ID'];
  level: Scalars['Int'];
}>;


export type CreateLevelMutation = { __typename?: 'Mutation', createLevel?: { __typename?: 'Level', id: string } | null };

export type CreateLevelsMutationVariables = Exact<{
  levels: Array<LevelCreateInput> | LevelCreateInput;
}>;


export type CreateLevelsMutation = { __typename?: 'Mutation', createLevels?: Array<{ __typename?: 'Level', id: string } | null> | null };

export type CreateSkillMutationVariables = Exact<{
  name: Scalars['String'];
  userId: Scalars['ID'];
  teamId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  levels?: InputMaybe<Array<LevelCreateInput> | LevelCreateInput>;
}>;


export type CreateSkillMutation = { __typename?: 'Mutation', createSkill?: { __typename?: 'Skill', id: string } | null };

export type CreateTeamMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  userId: Scalars['ID'];
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam?: { __typename?: 'Team', id: string } | null };

export type DeleteInvitationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteInvitationMutation = { __typename?: 'Mutation', deleteInvitation?: { __typename?: 'Invitation', id: string } | null };

export type DeleteLevelsMutationVariables = Exact<{
  whereLevelIds: Array<LevelWhereUniqueInput> | LevelWhereUniqueInput;
}>;


export type DeleteLevelsMutation = { __typename?: 'Mutation', deleteLevels?: Array<{ __typename?: 'Level', id: string } | null> | null };

export type DeleteSkillMutationVariables = Exact<{
  skillId: Scalars['ID'];
}>;


export type DeleteSkillMutation = { __typename?: 'Mutation', deleteSkill?: { __typename?: 'Skill', id: string } | null };

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

export type ResendInvitationMutationVariables = Exact<{
  id: Scalars['ID'];
  expires: Scalars['DateTime'];
}>;


export type ResendInvitationMutation = { __typename?: 'Mutation', updateInvitation?: { __typename?: 'Invitation', id: string } | null };

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

export type UpdateLevelMutationVariables = Exact<{
  levelId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateLevelMutation = { __typename?: 'Mutation', updateLevel?: { __typename?: 'Level', id: string } | null };

export type UpdateLevelsMutationVariables = Exact<{
  data: Array<LevelUpdateArgs> | LevelUpdateArgs;
}>;


export type UpdateLevelsMutation = { __typename?: 'Mutation', updateLevels?: Array<{ __typename?: 'Level', id: string } | null> | null };

export type UpdateSkillMutationVariables = Exact<{
  skillId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
}>;


export type UpdateSkillMutation = { __typename?: 'Mutation', updateSkill?: { __typename?: 'Skill', id: string } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type InvitationQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type InvitationQuery = { __typename?: 'Query', invitation?: { __typename?: 'Invitation', id: string, email?: string | null, created?: any | null, expires?: any | null, expired?: boolean | null, accepted?: any | null } | null };

export type LevelsByTeamAndLevelQueryVariables = Exact<{
  teamId: Scalars['ID'];
  level: Scalars['Int'];
}>;


export type LevelsByTeamAndLevelQuery = { __typename?: 'Query', levels?: Array<{ __typename?: 'Level', id: string }> | null };

export type LoginPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type InvitationAcceptPageQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type InvitationAcceptPageQuery = { __typename?: 'Query', invitation?: { __typename?: 'Invitation', id: string, email?: string | null, created?: any | null, expires?: any | null, expired?: boolean | null, accepted?: any | null } | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type ResetPasswordPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ResetPasswordPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type ResetPasswordRequestPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ResetPasswordRequestPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type SignUpPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SignUpPageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserInvitationPageQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserInvitationPageQuery = { __typename?: 'Query', user?: { __typename?: 'User', createdInvitations?: Array<{ __typename?: 'Invitation', id: string, email?: string | null, created?: any | null, expires?: any | null, expired?: boolean | null, accepted?: any | null }> | null } | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserPageQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserPageQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserTeamsCreatePageQueryVariables = Exact<{ [key: string]: never; }>;


export type UserTeamsCreatePageQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserTeamsCreatedPageQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserTeamsCreatedPageQuery = { __typename?: 'Query', user?: { __typename?: 'User', authoredTeams?: Array<{ __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null }> | null } | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserTeamsManagedPageQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserTeamsManagedPageQuery = { __typename?: 'Query', user?: { __typename?: 'User', managedTeams?: Array<{ __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null }> | null } | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserTeamsPageQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserTeamsPageQuery = { __typename?: 'Query', user?: { __typename?: 'User', allUserTeams?: Array<{ __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null } | null> | null } | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserTeamsTeamPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserTeamsTeamPageQuery = { __typename?: 'Query', team?: { __typename?: 'Team', id: string, name?: string | null, description?: string | null, updated?: any | null, currentUserIsAuthor?: boolean | null, currentUserIsManager?: boolean | null, skills?: Array<{ __typename?: 'Skill', id: string, name?: string | null, description?: string | null }> | null, author?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null } | null, managers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null, members?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null }> | null } | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserTeamsTeamSkillsCreatePageQueryVariables = Exact<{
  teamId: Scalars['ID'];
}>;


export type UserTeamsTeamSkillsCreatePageQuery = { __typename?: 'Query', team?: { __typename?: 'Team', id: string, name?: string | null, description?: string | null } | null, skills?: Array<{ __typename?: 'Skill', id: string, name?: string | null, description?: string | null }> | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type UserTeamsTeamSkillsUpdatePageQueryVariables = Exact<{
  teamId: Scalars['ID'];
}>;


export type UserTeamsTeamSkillsUpdatePageQuery = { __typename?: 'Query', team?: { __typename?: 'Team', id: string, name?: string | null, description?: string | null } | null, skills?: Array<{ __typename?: 'Skill', id: string, name?: string | null, description?: string | null, levels?: Array<{ __typename?: 'Level', id: string, name?: string | null, description?: string | null, level?: number | null }> | null }> | null, levels?: Array<{ __typename?: 'Level', id: string, name?: string | null, description?: string | null, level?: number | null }> | null, authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, role?: { __typename?: 'Role', name?: string | null } | null } | null };

export type SkillsByTeamQueryVariables = Exact<{
  teamId: Scalars['ID'];
}>;


export type SkillsByTeamQuery = { __typename?: 'Query', skills?: Array<{ __typename?: 'Skill', id: string, name?: string | null, description?: string | null, levels?: Array<{ __typename?: 'Level', id: string, name?: string | null, description?: string | null, level?: number | null }> | null }> | null };

export type UserInvitationsQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type UserInvitationsQuery = { __typename?: 'Query', user?: { __typename?: 'User', createdInvitations?: Array<{ __typename?: 'Invitation', id: string, email?: string | null, created?: any | null, expires?: any | null, expired?: boolean | null, accepted?: any | null }> | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, registered?: any | null }> | null };

export const InvitationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"invitationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Invitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"expires"}},{"kind":"Field","name":{"kind":"Name","value":"expired"}},{"kind":"Field","name":{"kind":"Name","value":"accepted"}}]}}]} as unknown as DocumentNode<InvitationFieldsFragment, unknown>;
export const PublicUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"publicUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<PublicUserFieldsFragment, unknown>;
export const TeamFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"managers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentUserIsAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"currentUserIsManager"}}]}},...PublicUserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<TeamFieldsFragment, unknown>;
export const CurrentUserTeamsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"currentUserTeamsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUserTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authoredTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"managedTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}}]}}]}}]}}]}},...TeamFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CurrentUserTeamsFieldsFragment, unknown>;
export const CurrentUserBasicFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"currentUserBasicFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CurrentUserBasicFieldsFragment, unknown>;
export const RequiredAppDataQueryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"requiredAppDataQueryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"currentUserBasicFields"}}]}},...CurrentUserBasicFieldsFragmentDoc.definitions]} as unknown as DocumentNode<RequiredAppDataQueryFieldsFragment, unknown>;
export const AcceptInvitationAndCreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptInvitationAndCreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accepted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accepted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accepted"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accepted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"invitation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AcceptInvitationAndCreateUserMutation, AcceptInvitationAndCreateUserMutationVariables>;
export const CreateInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expires"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"expires"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expires"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"createdBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateInvitationMutation, CreateInvitationMutationVariables>;
export const CreateLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skillId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"level"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLevel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"skill"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skillId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLevelMutation, CreateLevelMutationVariables>;
export const CreateLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLevels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levels"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LevelCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLevels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLevelsMutation, CreateLevelsMutationVariables>;
export const CreateSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levels"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LevelCreateInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"levels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"create"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateSkillMutation, CreateSkillMutationVariables>;
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const DeleteInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteInvitationMutation, DeleteInvitationMutationVariables>;
export const DeleteLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLevels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereLevelIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LevelWhereUniqueInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLevels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereLevelIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteLevelsMutation, DeleteLevelsMutationVariables>;
export const DeleteSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skillId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skillId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSkillMutation, DeleteSkillMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endSession"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const PasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"passwordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"redeemUserPasswordResetToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<PasswordResetMutation, PasswordResetMutationVariables>;
export const ResendInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resendInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expires"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"expires"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expires"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ResendInvitationMutation, ResendInvitationMutationVariables>;
export const SendUserPasswordResetLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendUserPasswordResetLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendUserPasswordResetLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SendUserPasswordResetLinkMutation, SendUserPasswordResetLinkMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const UpdateLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"level"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLevel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levelId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"Variable","name":{"kind":"Name","value":"level"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLevelMutation, UpdateLevelMutationVariables>;
export const UpdateLevelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLevels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LevelUpdateArgs"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLevels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLevelsMutation, UpdateLevelsMutationVariables>;
export const UpdateSkillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSkill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skillId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSkill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skillId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateSkillMutation, UpdateSkillMutationVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const InvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"invitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"invitationFields"}}]}}]}},...InvitationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<InvitationQuery, InvitationQueryVariables>;
export const LevelsByTeamAndLevelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"levelsByTeamAndLevel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"level"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"levels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"AND"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"level"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LevelsByTeamAndLevelQuery, LevelsByTeamAndLevelQueryVariables>;
export const LoginPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"loginPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<LoginPageQuery, LoginPageQueryVariables>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const InvitationAcceptPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"invitationAcceptPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"invitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"invitationFields"}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions,...InvitationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<InvitationAcceptPageQuery, InvitationAcceptPageQueryVariables>;
export const ResetPasswordPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"resetPasswordPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ResetPasswordPageQuery, ResetPasswordPageQueryVariables>;
export const ResetPasswordRequestPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"resetPasswordRequestPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ResetPasswordRequestPageQuery, ResetPasswordRequestPageQueryVariables>;
export const SignUpPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signUpPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<SignUpPageQuery, SignUpPageQueryVariables>;
export const UserInvitationPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userInvitationPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdInvitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"invitationFields"}}]}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions,...InvitationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserInvitationPageQuery, UserInvitationPageQueryVariables>;
export const UserPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"publicUserFields"}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions,...PublicUserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserPageQuery, UserPageQueryVariables>;
export const UserTeamsCreatePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userTeamsCreatePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserTeamsCreatePageQuery, UserTeamsCreatePageQueryVariables>;
export const UserTeamsCreatedPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userTeamsCreatedPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authoredTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}}]}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions,...TeamFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserTeamsCreatedPageQuery, UserTeamsCreatedPageQueryVariables>;
export const UserTeamsManagedPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userTeamsManagedPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"managedTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}}]}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions,...TeamFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserTeamsManagedPageQuery, UserTeamsManagedPageQueryVariables>;
export const UserTeamsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userTeamsPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUserTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}}]}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions,...TeamFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserTeamsPageQuery, UserTeamsPageQueryVariables>;
export const UserTeamsTeamPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userTeamsTeamPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"teamFields"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions,...TeamFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserTeamsTeamPageQuery, UserTeamsTeamPageQueryVariables>;
export const UserTeamsTeamSkillsCreatePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userTeamsTeamSkillsCreatePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserTeamsTeamSkillsCreatePageQuery, UserTeamsTeamSkillsCreatePageQueryVariables>;
export const UserTeamsTeamSkillsUpdatePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userTeamsTeamSkillsUpdatePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"requiredAppDataQueryFields"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}},...RequiredAppDataQueryFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserTeamsTeamSkillsUpdatePageQuery, UserTeamsTeamSkillsUpdatePageQueryVariables>;
export const SkillsByTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"skillsByTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"team"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"level"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]}}]} as unknown as DocumentNode<SkillsByTeamQuery, SkillsByTeamQueryVariables>;
export const UserInvitationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userInvitations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdInvitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"invitationFields"}}]}}]}}]}},...InvitationFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserInvitationsQuery, UserInvitationsQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"registered"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;