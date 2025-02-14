"use strict";

module.exports = {
    async trophyTitleGroup(val, constants) {
        let data = [];
        let params = { params: { npServiceName: "trophy" } };
        try {
            data = JSON.parse(val);
            params = { params: { npServiceName: data[1].toUpperCase() === "PS5" ? "trophy2" : "trophy" } };
        } catch (e) {
            this.log.warn(`Parse error: ${e}`);
            return;
        }
        this.getHeader.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const methode = "get";
        const url = `${constants.BASE_PATH.trophies}${constants.API_PATH.title_trophy_group.replace("{np_communication_id}", data[0])}`;
        const trophy_title_group = await this.requestPSN(methode, url, this.getHeader, params, true);
        this.log.debug(`TROPHYGROUP: ${JSON.stringify(trophy_title_group.data)}`);
        if (trophy_title_group.data) {
            if (trophy_title_group.data.totalItemCount != null) {
                await this.setState(`profile_remote_profile.total`, {
                    val: trophy_title_group.data.totalItemCount,
                    ack: true,
                });
            }
            await this.setState(`profile_remote_trophies.result`, {
                val: JSON.stringify(trophy_title_group.data),
                ack: true,
            });
            return;
        }
        return {};
    },
    async gameList(accountId, constants) {
        this.getHeader.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const methode = "get";
        const url = `${constants.BASE_PATH.games_list}${constants.API_PATH.user_game_data.replace("{account_id}", accountId.toString())}`;
        const gameList = await this.requestPSN(methode, url, this.getHeader, null, true);
        this.log.debug(`LIST: ${JSON.stringify(gameList.data)}`);
        if (gameList.data) {
            if (gameList.data.totalItemCount != null) {
                await this.setState(`profile_remote_profile.total`, {
                    val: gameList.data.totalItemCount,
                    ack: true,
                });
            }
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(gameList.data), ack: true });
            return;
        }
        await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
    },
    async gameTitle(title, constants) {
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url = `${constants.BASE_PATH.game_titles}${constants.API_PATH.title_concept.replace("{title_id}", title)}`;
        const gametitle = await this.requestPSN(methode, url, header, null, true);
        this.log.debug(`LIST: ${JSON.stringify(gametitle.data)}`);
        if (gametitle.data) {
            if (gametitle.data.totalItemCount != null) {
                await this.setState(`profile_remote_profile.total`, {
                    val: gametitle.data.totalItemCount,
                    ack: true,
                });
            }
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(gametitle.data), ack: true });
            return;
        }
        await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
    },
    async updateProfile(constants, first) {
        this.log.debug(`Start update profile!`);
        const methode = "get";
        let url = `${constants.BASE_PATH.account_uri}${constants.API_PATH.my_account}`;
        this.getHeader.headers["Content-Type"] = "application/x-www-form-urlencoded";
        let params;
        params = {
            params: {
                includeFields: "device,systemData",
                platform: "PS5,PS4,PS3,PSVita",
            },
        };
        const accountid = await this.requestPSN(methode, url, this.getHeader, params, true);
        if (accountid && accountid.data && accountid.data.accountId) {
            this.log.debug(`accountid: ${JSON.stringify(accountid.data)}`);
            await this.json2iob.parse(`profile.account`, accountid.data, {
                forceIndex: true,
                write: false,
                preferedArrayName: null,
                channelName: "Account infos",
                autoCast: true,
                checkvalue: false,
                checkType: true,
                firstload: first,
            });
        } else {
            return;
        }
        this.accountId = accountid.data.accountId;
        url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.friends_summary.replace("{account_id}", accountid.data.accountId)}`;
        const friends_summary = await this.requestPSN(methode, url, this.getHeader, undefined, true);
        if (friends_summary && friends_summary.data) {
            this.log.debug(`friends_summary: ${JSON.stringify(friends_summary.data)}`);
            await this.json2iob.parse(`profile.friends_summary`, friends_summary.data, {
                forceIndex: true,
                write: false,
                preferedArrayName: null,
                channelName: "Friends summary infos",
                autoCast: true,
                checkvalue: false,
                checkType: true,
                firstload: first,
            });
        } else {
            return;
        }
        url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.profiles.replace("{account_id}", accountid.data.accountId)}`;
        const profile = await this.requestPSN(methode, url, this.getHeader, undefined, true);
        if (profile && profile.data && profile.data.onlineId) {
            if (profile.data.languages[0] && !profile.data.languages.includes(this.config.langPSN)) {
                this.log.error(`Cannot found instance langauges ${this.config.langPSN} in your PSN account!!`);
            }
            this.log.debug(`profile: ${JSON.stringify(profile.data)}`);
            await this.json2iob.parse(`profile.profile`, profile.data, {
                forceIndex: true,
                write: false,
                preferedArrayName: null,
                channelName: "Profile infos",
                autoCast: true,
                checkvalue: false,
                checkType: true,
                firstload: first,
            });
        } else {
            return;
        }
        params = {
            params: {
                fields:
                    "npId,onlineId,accountId,avatarUrls,plus,aboutMe,languagesUsed,trophySummary(@default,level,progress,earnedTrophies)," +
                    "isOfficiallyVerified,personalDetail(@default,profilePictureUrls),personalDetailSharing,personalDetailSharingRequestMessageFlag," +
                    "primaryOnlineStatus,presences(@default,@titleInfo,platform,lastOnlineDate,hasBroadcastData),requestMessageFlag,blocking,friendRelation," +
                    "following,consoleAvailability",
            },
        };
        this.onlineId = profile.data.onlineId;
        url = `${constants.BASE_PATH.legacy_profile_uri}${constants.API_PATH.legacy_profile.replace("{online_id}", profile.data.onlineId)}`;
        const legacy = await this.requestPSN(methode, url, this.getHeader, params, true);
        if (legacy && legacy.data && legacy.data.profile) {
            this.log.debug(`legacy: ${JSON.stringify(legacy.data)}`);
            await this.json2iob.parse(`profile.legacy`, legacy.data.profile, {
                forceIndex: true,
                write: false,
                preferedArrayName: null,
                channelName: "Legacy profile infos",
                autoCast: true,
                checkvalue: false,
                checkType: true,
                firstload: first,
            });
            if (legacy.data.profile.npId) {
                const mail = await this.npIdDecode(legacy.data.profile.npId);
                const country_arr = mail.split(".");
                const country = country_arr[country_arr.length - 1];
                // ToDo check is file exists
                const common = {
                    type: "string",
                    role: "state",
                    name: {
                        en: "Country",
                        de: "Land",
                        ru: "Страна",
                        pt: "Pais",
                        nl: "Land",
                        fr: "Pays",
                        it: "Paese",
                        es: "País",
                        pl: "Kraj",
                        uk: "Країна",
                        "zh-cn": "国家",
                    },
                    desc: "Country",
                    read: true,
                    write: false,
                    def: "",
                    icon: `img/flags/${country}.png`,
                };
                await this.createDataPoint(`profile.legacy.country`, common, "state", country, null);
            }
        } else {
            return;
        }
    },
    async loadAccount_id(accountId, constants) {
        if (!accountId) {
            this.log.warn(`Missing accoundId!!`);
            return;
        }
        this.getHeader.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const methode = "get";
        const url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.profiles.replace("{account_id}", accountId.toString())}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, undefined, true);
        if (resp && resp.data) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            this.log.warn(`No data found for user ${accountId}`);
            return;
        }
    },
    async loadOnline_id(val, constants) {
        if (!val) {
            this.log.warn(`Missing onlineId!!`);
            return;
        }
        this.getHeader.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const methode = "get";
        const params = {
            params: {
                fields:
                    "npId,onlineId,accountId,avatarUrls,plus,aboutMe,languagesUsed,trophySummary(@default,level,progress,earnedTrophies)," +
                    "isOfficiallyVerified,personalDetail(@default,profilePictureUrls),personalDetailSharing,personalDetailSharingRequestMessageFlag," +
                    "primaryOnlineStatus,presences(@default,@titleInfo,platform,lastOnlineDate,hasBroadcastData),requestMessageFlag,blocking,friendRelation," +
                    "following,consoleAvailability",
            },
        };
        const url = `${constants.BASE_PATH.legacy_profile_uri}${constants.API_PATH.legacy_profile.replace("{online_id}", val)}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, params, true);
        if (resp && resp.data && resp.data.profile) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            this.log.warn(`No data found for user ${val}`);
            return;
        }
    },
    async loadReceivedRequests(name, constants) {
        let limit;
        limit = await this.getStateAsync(`profile_remote_profile.limit`);
        if (!limit || !limit.val) {
            this.log.info(`Set limit 50!!`);
            limit = 50;
        }
        let offset;
        offset = await this.getStateAsync(`profile_remote_profile.offset`);
        if (!offset || offset.val == null) {
            this.log.info(`Set offset 0!!`);
            offset.val = 0;
        }
        this.getHeader.headers["Content-Type"] = "application/x-www-form-urlencoded";
        const methode = "get";
        const params = { params: { limit: limit.val, offset: offset.val } };
        let url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.friends_request.replace("{account_id}", "me")}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data && resp.data.receivedRequests) {
            if (resp.data.totalItemCount != null) {
                await this.setState(`profile_remote_profile.total`, {
                    val: resp.data.totalItemCount,
                    ack: true,
                });
            }
            let response = resp.data.receivedRequests;
            if (name) {
                if (Object.keys(response).length > 0) {
                    for (const id of response) {
                        url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.profiles.replace("{account_id}", id.accountId)}`;
                        const user = await this.requestPSN(methode, url, this.getHeader, undefined, true);
                        if (user && user.data && user.data.onlineId) {
                            id.onlineId = user.data.onlineId;
                        }
                    }
                }
            }
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(response), ack: true });
        }
    },
    async loadRequest(req, name, constants, status) {
        if (!this.accountId) {
            this.log.warn(`Missing accoundId!!`);
            return;
        }
        let limit;
        let url = "";
        limit = await this.getStateAsync(`profile_remote_profile.limit`);
        if (!limit || !limit.val) {
            this.log.info(`Set limit 50!!`);
            limit = 50;
        }
        let offset;
        offset = await this.getStateAsync(`profile_remote_profile.offset`);
        if (!offset || offset.val == null) {
            this.log.info(`Set offset 0!!`);
            offset.val = 0;
        }
        let params;
        params = { params: { limit: limit.val, offset: offset.val } };
        const methode = "get";
        this.getHeader.headers["Content-Type"] = "application/x-www-form-urlencoded";
        let status_user = false;
        let response = [];
        if (req === "friend") {
            url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.friends_list.replace("{account_id}", this.accountId)}`;
            status_user = status;
        } else if (req === "block") {
            params = undefined;
            url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.blocked_users}`;
        } else if (req === "online") {
            params = undefined;
            url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.available_to_play}`;
        } else {
            return;
        }
        this.log.debug(`URL: ${url}`);
        const resp = await this.requestPSN(methode, url, this.getHeader, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            let count = 0;
            if (resp.data.totalItemCount != null) {
                count = resp.data.totalItemCount;
            }
            await this.setState(`profile_remote_profile.total`, {
                val: count,
                ack: true,
            });
            if (resp.data.friends) {
                response = resp.data.friends;
            } else if (resp.data.blockList) {
                response = resp.data.blockList;
            } else if (resp.data.settings) {
                response = resp.data.settings;
            } else {
                return;
            }
        } else {
            return;
        }
        if (name) {
            if (Object.keys(response).length > 0) {
                const arr = [];
                for (const id of response) {
                    url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.profiles.replace("{account_id}", id)}`;
                    const user = await this.requestPSN(methode, url, this.getHeader, undefined, true);
                    if (user && user.data && user.data.onlineId) {
                        arr.push({ account_id: id, online_id: user.data.onlineId });
                    } else {
                        arr.push({ account_id: id, online_id: "Unknown" });
                    }
                }
                response = arr;
            }
        }
        if (status_user) {
            if (Object.keys(response).length > 0) {
                params = {
                    params: {
                        fields:
                            "npId,onlineId,accountId,avatarUrls,plus,aboutMe,languagesUsed,trophySummary(@default,level,progress,earnedTrophies)," +
                            "isOfficiallyVerified,personalDetail(@default,profilePictureUrls),personalDetailSharing,personalDetailSharingRequestMessageFlag," +
                            "primaryOnlineStatus,presences(@default,@titleInfo,platform,lastOnlineDate,hasBroadcastData),requestMessageFlag,blocking,friendRelation," +
                            "following,consoleAvailability",
                    },
                };
                for (const id of response) {
                    const onlineId = id.online_id.toString();
                    url = `${constants.BASE_PATH.legacy_profile_uri}${constants.API_PATH.legacy_profile.replace("{online_id}", onlineId)}`;
                    const user = await this.requestPSN(methode, url, this.getHeader, params, true);
                    if (user && user.data && user.data.profile) {
                        const profile = user.data.profile;
                        if (profile.primaryOnlineStatus) {
                            id["primaryOnlineStatus"] = profile.primaryOnlineStatus;
                        }
                        if (profile.presences && profile.presences[0]) {
                            id["onlineStatus"] = profile.presences[0].onlineStatus;
                            id["lastOnlineDate"] = profile.presences[0].lastOnlineDate
                                ? profile.presences[0].lastOnlineDate
                                : new Date();
                            id["gameTitle"] = profile.presences[0].titleName ? profile.presences[0].titleName : "";
                        }
                        if (profile.consoleAvailability) {
                            id["availabilityStatus"] = profile.consoleAvailability.availabilityStatus;
                        }
                        if (profile.avatarUrls && profile.avatarUrls[0]) {
                            id["avatarUrl"] = profile.avatarUrls[0].avatarUrl;
                        }
                        if (profile.friendRelation) {
                            id["friendRelation"] = profile.friendRelation;
                        }
                    }
                }
            }
        }
        await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(response), ack: true });
    },
    async getUniversalSearch(name, platform, constants) {
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["apollographql-client-name"] = "PlayStationApp-Android";
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({
                    searchTerm: name,
                    searchContext: platform,
                    displayTitleLocale: this.lang,
                }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: constants.hashMap.metGetContextSearchResults },
                }),
            },
        };
        const url = `${constants.BASE_PATH.graph_ql}${constants.API_PATH.getContextSearchResults}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        const obj = await this.getObjectAsync(`profile_remote_profile.search_result_pagination`);
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_profile.search_result`, {
                val: JSON.stringify(resp.data.data),
                ack: true,
            });
            if (
                resp.data.data &&
                resp.data.data.universalContextSearch &&
                resp.data.data.universalContextSearch.results &&
                Object.keys(resp.data.data.universalContextSearch.results).length > 0
            ) {
                if (resp.data.data.universalContextSearch.results[0].totalResultCount != null) {
                    await this.setState(`profile_remote_profile.total`, {
                        val: resp.data.data.universalContextSearch.results[0].totalResultCount,
                        ack: true,
                    });
                }
                if (resp.data.data.universalContextSearch.results[0].next != "") {
                    const next = resp.data.data.universalContextSearch.results[0].next;
                    obj.common.states = {};
                    obj.common.states[`${name}||${platform}`] = "Page 1";
                    obj.common.states[`${name}|${next}|${platform}`] = "Page 2";
                    await this.setObjectAsync(`profile_remote_profile.search_result_pagination`, obj);
                    return;
                }
            }
        } else {
            await this.setState(`profile_remote_profile.search_result`, { val: JSON.stringify({}), ack: true });
        }
        if (obj.common.states) {
            delete obj.common.states;
            await this.setObjectAsync(`profile_remote_profile.search_result_pagination`, obj);
        }
    },
    async getUniversalSearchPagination(pagination, constants) {
        if (!pagination || typeof pagination !== "string") {
            return;
        }
        const data = pagination.split("|");
        if (!data[1] || data[1] == "") {
            await this.setState(`profile_remote_profile.search_result`, { val: JSON.stringify({}), ack: true });
            return;
        }
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["apollographql-client-name"] = "PlayStationApp-Android";
        let searchDomain = "MobileGames";
        if (data[2] === "MobileUniversalSearchSocial") {
            searchDomain = "SocialAllAccounts";
        }
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({
                    searchTerm: data[0],
                    searchDomain: searchDomain,
                    nextCursor: data[1],
                    pageSize: 20,
                    pageOffset: 100,
                }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: constants.hashMap.metGetDomainSearchResults },
                }),
            },
        };
        const url = `${constants.BASE_PATH.graph_ql}${constants.API_PATH.getDomainSearchResults}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        const obj = await this.getObjectAsync(`profile_remote_profile.search_result_pagination`);
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_profile.search_result`, {
                val: JSON.stringify(resp.data.data),
                ack: true,
            });
            if (
                resp.data.data &&
                resp.data.data.universalDomainSearch &&
                resp.data.data.universalDomainSearch.next &&
                resp.data.data.universalDomainSearch.next != ""
            ) {
                const count = Object.keys(obj.common.states).length + 1;
                const next = resp.data.data.universalDomainSearch.next;
                obj.common.states[`${data[0]}|${next}|${data[2]}`] = `Page ${count}`;
                await this.setObjectAsync(`profile_remote_profile.search_result_pagination`, obj);
                return;
            }
            return;
        }
        await this.setState(`profile_remote_profile.search_result`, { val: JSON.stringify({}), ack: true });
    },
    async getStoreWishlist(constants) {
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["apollographql-client-name"] = "PlayStationApp-Android";
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({}),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: constants.hashMap.metGetStoreWishlist },
                }),
            },
        };
        const url = `${constants.BASE_PATH.graph_ql}${constants.API_PATH.getStoreWishlist}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data.data), ack: true });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async getDeviceInfo(constants) {
        this.getHeader.headers["Content-Type"] = "application/json;charset=utf-8";
        const methode = "get";
        const params = {
            params: {
                includeFields: "device,systemData",
                platform: "PS4",
            },
        };
        const url = constants.BASE_PATH.storage_usage;
        const resp = await this.requestPSN(methode, url, this.getHeader, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async presencesUser(accountId, constants) {
        this.getHeader.headers["Content-Type"] = "application/json;charset=utf-8";
        const methode = "get";
        const params = { params: { type: "primary" } };
        const url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.basic_presences.replace("{account_id}", accountId.toString())}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async allDocuments(constants) {
        this.getHeader.headers["Content-Type"] = "application/json;charset=utf-8";
        const methode = "get";
        const params = {
            params: {
                includeTokenizedUrls: "true",
                limit: 20,
                offset: 0,
            },
        };
        const url = `${constants.BASE_PATH.ugc_document}${constants.API_PATH.ugc_all}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async shareProfile(accountId, constants) {
        this.getHeader.headers["Content-Type"] = "application/json;charset=utf-8";
        const methode = "get";
        const url = `${constants.BASE_PATH.cpss}${constants.API_PATH.share_profile.replace("{account_id}", accountId.toString())}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, null, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async receivedRequestsAccept(accountId, constants) {
        this.getHeader.headers["Content-Type"] = "application/json;charset=utf-8";
        const methode = "put";
        const url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.manage_friendship.replace("{account_id}", accountId.toString())}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, null, false);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            await this.setState(`profile_remote_profile.result`, {
                val: JSON.stringify({ status: "accept" }),
                ack: true,
            });
        } else if (resp.response && resp.response.status && resp.response.status == 409) {
            await this.setState(`profile_remote_profile.result`, {
                val: JSON.stringify({ status: "user not found" }),
                ack: true,
            });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({ status: resp }), ack: true });
        }
    },
    async receivedRequestsReject(accountId, constants) {
        this.getHeader.headers["Content-Type"] = "application/json;charset=utf-8";
        const methode = "post";
        const url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.manage_friendship.replace("{account_id}", accountId.toString())}`;
        const resp = await this.requestPSN(methode, url, this.getHeader, null, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            await this.setState(`profile_remote_profile.result`, {
                val: JSON.stringify({ status: "accept" }),
                ack: true,
            });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({ status: resp }), ack: true });
        }
    },
};
