exports.BASIC_AUTH = "MDk1MTUxNTktNzIzNy00MzcwLTliNDAtMzgwNmU2N2MwODkxOnVjUGprYTV0bnRCMktxc1A=";
exports.REDIRECT = "com.scee.psxandroid.scecompcall://redirect";
exports.UUID = "09515159-7237-4370-9b40-3806e67c0891";
exports.USERINFOHASH = "e780a6d8b921ef0c59ec01ea5c5255671272ca0d819edb61320914cf7a78b3ae";
exports.PLAYEDGAMELISTHASH = "c17b8b45ac988fec34e6a833f7a788edf7857c900fc3dc116585ced48577fb05";
exports.GAMELISTHASH = "2c045408b0a4d0264bb5a3edfed4efd49fb4749cf8d216be9043768adff905e2";
exports.ISecondScreenCredentials = {
    type: "WAKEUP",
    "app-type": "c",
    "auth-type": "C",
    "client-type": "a",
    model: "a",
    "user-credential": "",
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
    my_groups: "/members/me/groups",
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
};
exports.PlatformType = {
    UNKNOWN: "UNKNOWN",
    PS_VITA: "PSVITA",
    PS3: "PS3",
    PS4: "PS4",
    PS5: "PS5",
    PSPC: "PSPC",
};
