exports.BASIC_AUTH = "MDk1MTUxNTktNzIzNy00MzcwLTliNDAtMzgwNmU2N2MwODkxOnVjUGprYTV0bnRCMktxc1A=";
exports.REDIRECT = "com.scee.psxandroid.scecompcall://redirect";
exports.UUID = "09515159-7237-4370-9b40-3806e67c0891";
exports.USERINFOHASH = "e780a6d8b921ef0c59ec01ea5c5255671272ca0d819edb61320914cf7a78b3ae";
exports.PLAYEDGAMELISTHASH = "c17b8b45ac988fec34e6a833f7a788edf7857c900fc3dc116585ced48577fb05";
exports.GAMELISTHASH = "2c045408b0a4d0264bb5a3edfed4efd49fb4749cf8d216be9043768adff905e2";
exports.SecondScreenCredentials = {
    type: "WAKEUP",
    "app-type": "c",
    "auth-type": "C",
    "client-type": "a",
    model: "a",
    "user-credential": "",
    "device-discovery-protocol-version": 0,
};
exports.hashMap = {
    metGetConceptByProductIdQuery: "0a4c9f3693b3604df1c8341fdc3e481f42eeecf961a996baaa65e65a657a6433",
    metGetConceptById: "cc90404ac049d935afbd9968aef523da2b6723abfb9d586e5f77ebf7c5289006",
    metGetProductById: "a128042177bd93dd831164103d53b73ef790d56f51dae647064cb8f9d9fc9d1a",
    metGetAddOnsByTitleId: "e98d01ff5c1854409a405a5f79b5a9bcd36a5c0679fb33f4e18113c157d4d916",
    metGetCategoryGrid: "b67a9e4414b80d8d762bf12a588c6125467ae0bb3bbe3cee3f7696c6984f8ef6",
    metGetCategoryGrids: "cc0b6513521c59a321bf62334fa23a92f22cd2ce1abe9f014fadac6379e414a8",
    metGetCategoryStrands: "55ab5f168bec56f8362b5519f59faaf786d4e1cfeabb8bc969d6a65545e14f4d",
    metGetDefaultView: "bec1b8a3b0bae8c08e3ce2c7fe2f38a69343434ccfbcdd82cc1f2e44f86b7c40",
    metGetPricingDataByConceptId: "abcb311ea830e679fe2b697a27f755764535d825b24510ab1239a4ca3092bd09",
    metGetStoreWishlist: "571149e8aa4d76af7dd33b92e1d6f8f828ebc5fa8f0f6bf51a8324a0e6d71324",
    metGetViews: "6fd98ff7fecb603006fb5d92db176d5028435be163c8d1ee9f7c598ab4677dd1",
    metGetWebCheckoutCart: "2d4165c4de76877a32f3d08c91ce2af0e01d69300131fed0a8022868235e85b1",
    metGetExperience: "054e61ee68bbeadc21435caebcc4f2bba0919a99b06629d141b0b82dc55f10c4",
    metGetHintAvailability: "71bf26729f2634f4d8cca32ff73aaf42b3b76ad1d2f63b490a809b66483ea5a7",
    metGetContextSearchResults: "ac5fb2b82c4d086ca0d272fba34418ab327a7762dd2cd620e63f175bbc5aff10",
    metGetDomainSearchResults: "23ece284bf8bdc50bfa30a4d97fd4d733e723beb7a42dff8c1ee883f8461a2e1",
    metGetTips: "93768752a9f4ef69922a543e2209d45020784d8781f57b37a5294e6e206c5630",
};
// "categories":"ps3_game,ps4_game,ps5_native_game
exports.BASE_PATH = {
    base_uri: "https://ca.account.sony.com/api",
    profile_uri: "https://m.np.playstation.com/api/userProfile/v1/internal/users",
    account_uri: "https://dms.api.playstation.com/api",
    legacy_profile_uri: "https://us-prof.np.community.playstation.net/userProfile/v1/users",
    gaming_lounge: "https://m.np.playstation.com/api/gamingLoungeGroups/v1",
    universal_search: "https://m.np.playstation.com/api/search/v1/universalSearch",
    game_titles: "https://m.np.playstation.com/api/catalog/v2/titles",
    trophies: "https://m.np.playstation.com/api/trophy/v1",
    games_list: "https://m.np.playstation.com/api/gamelist/v2",
    graph_ql: "https://m.np.playstation.com/api/graphql/v1/op",
    graph1_ql: "https://web.np.playstation.com/api/graphql/v1/op",
    message_threads: "https://de-gmsg.np.community.playstation.net/groupMessaging/v1/threads",
    message_user: "https://de-gmsg.np.community.playstation.com/groupMessaging/v1/users/",
    send_message: "https://de-gmsg.np.community.playstation.com/groupMessaging/v1/messageGroups/",
    storage_usage: "https://m.np.playstation.com/api/cloudAssistedNavigation/v2/users/me/clients",
};

exports.API_PATH = {
    oauth_code: "/authz/v3/oauth/authorize",
    access_token: "/authz/v3/oauth/token",
    // Client/User Endpoint
    my_account: "/v1/devices/accounts/me",
    profiles: "/{account_id}/profiles",
    legacy_profile: "/{online_id}/profile2",
    friends_list: "/{account_id}/friends",
    friends_list_without_id: "/me/friends",
    friends_request: "/{account_id}/friends/receivedRequests",
    manage_friendship: "/me/friends/{account_id}",
    friends_summary: "/me/friends/{account_id}/summary",
    available_to_play: "/me/friends/subscribing/availableToPlay",
    blocked_users: "/me/blocks",
    basic_presences: "/basicPresences",
    // Group Endpoints
    my_groups: "/members/{account_id}/groups",
    group_settings: "/groups/{group_id}",
    create_group: "/groups",
    group_members: "/members/me/groups/{group_id}",
    invite_members: "/groups/{group_id}/invitees",
    kick_member: "/groups/{group_id}/members/{account_id}",
    send_group_message: "/groups/{group_id}/threads/{group_id}/messages",
    conversation: "/members/me/groups/{group_id}/threads/{group_id}/messages",
    leave_group: "/groups/{group_id}/members/me",
    // Game Title Details
    title_concept: "/{title_id}/concepts",
    // Trophy Endpoints
    trophy_titles: "/users/{account_id}/trophyTitles",
    trophies_for_title: "/npCommunicationIds/{np_communication_id}/trophyGroups/{trophy_group_id}/trophies",
    trophies_earned_for_title:
        "/users/{account_id}/npCommunicationIds/{np_communication_id}/trophyGroups/{trophy_group_id}/trophies",
    trophy_summary: "/users/{account_id}/trophySummary",
    title_trophy_group: "/npCommunicationIds/{np_communication_id}/trophyGroups",
    user_title_trophy_group: "/users/{account_id}/npCommunicationIds/{np_communication_id}/trophyGroups",
    trophy_titles_for_title: "/users/{account_id}/titles/trophyTitles",
    // User Title Data
    user_game_data: "/users/{account_id}/titles",
    // User Title Data
    getHintAvailability: "?operationName=metGetHintAvailability",
    getContextSearchResults: "?operationName=metGetContextSearchResults",
    getDomainSearchResults: "?operationName=metGetDomainSearchResults",
    getTips: "?operationName=metGetTips",
};
exports.PlatformType = {
    UNKNOWN: "UNKNOWN",
    PS_VITA: "PSVITA",
    PS3: "PS3",
    PS4: "PS4",
    PS5: "PS5",
    PSPC: "PSPC",
};
