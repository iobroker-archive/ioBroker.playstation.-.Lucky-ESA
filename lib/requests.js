"use strict";

module.exports = {
    async trophiesEarnedTitle(val, constants) {
        let data = [];
        let params = { params: { npServiceName: "trophy" } };
        try {
            data = JSON.parse(val);
            params = { params: { npServiceName: data[3].toUpperCase() === "PS5" ? "trophy2" : "trophy" } };
        } catch (e) {
            this.log.warn(`Parse error: ${e}`);
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url =
            constants.BASE_PATH.trophies +
            constants.API_PATH.trophies_earned_for_title
                .replace("{account_id}", data[0])
                .replace("{trophy_group_id}", data[2])
                .replace("{np_communication_id}", data[1]);
        const trophies = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`TROPHIES: ${JSON.stringify(trophies.data)}`);
        if (trophies.data) {
            await this.setState(`profile_remote.result`, {
                val: JSON.stringify(trophies.data),
                ack: true,
            });
            return;
        }
        return {};
    },
    async trophiesTitle(val, constants) {
        let data = [];
        let params = { params: { npServiceName: "trophy" } };
        try {
            data = JSON.parse(val);
            params = { params: { npServiceName: data[2].toUpperCase() === "PS5" ? "trophy2" : "trophy" } };
        } catch (e) {
            this.log.warn(`Parse error: ${e}`);
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url =
            constants.BASE_PATH.trophies +
            constants.API_PATH.trophies_for_title
                .replace("{trophy_group_id}", data[1])
                .replace("{np_communication_id}", data[0]);
        const trophies = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`TROPHIES: ${JSON.stringify(trophies.data)}`);
        if (trophies.data) {
            await this.setState(`profile_remote.result`, {
                val: JSON.stringify(trophies.data),
                ack: true,
            });
            return;
        }
        return {};
    },
    async trophyTitleUserGroup(val, constants) {
        let data = [];
        let params = { params: { npServiceName: "trophy" } };
        try {
            data = JSON.parse(val);
            params = { params: { npServiceName: data[2].toUpperCase() === "PS5" ? "trophy2" : "trophy" } };
        } catch (e) {
            this.log.warn(`Parse error: ${e}`);
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url =
            constants.BASE_PATH.trophies +
            constants.API_PATH.user_title_trophy_group
                .replace("{account_id}", data[0].toString())
                .replace("{np_communication_id}", data[1]);
        this.log.debug(`URL: ${url}`);
        this.log.debug(`PARAMS: ${JSON.stringify(params)}`);
        const trophy_title_group_user = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`TROPHYGROUPUSER: ${JSON.stringify(trophy_title_group_user.data)}`);
        if (trophy_title_group_user.data) {
            await this.setState(`profile_remote.result`, {
                val: JSON.stringify(trophy_title_group_user.data),
                ack: true,
            });
            return;
        }
        return {};
    },
    async trophyTitle(accountId, constants) {
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url = `${constants.BASE_PATH.trophies}${constants.API_PATH.trophy_titles.replace("{account_id}", accountId.toString())}`;
        const trophy_title = await this.requestPSN(methode, url, header, null, true);
        this.log.debug(`LIST: ${JSON.stringify(trophy_title.data)}`);
        if (trophy_title.data) {
            await this.setState(`profile_remote.result`, { val: JSON.stringify(trophy_title.data), ack: true });
            return;
        }
        return {};
    },
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
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url = `${constants.BASE_PATH.trophies}${constants.API_PATH.title_trophy_group.replace("{np_communication_id}", data[0])}`;
        const trophy_title_group = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`TROPHYGROUP: ${JSON.stringify(trophy_title_group.data)}`);
        if (trophy_title_group.data) {
            await this.setState(`profile_remote.result`, { val: JSON.stringify(trophy_title_group.data), ack: true });
            return;
        }
        return {};
    },
    async gameList(accountId, constants) {
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url = `${constants.BASE_PATH.games_list}${constants.API_PATH.user_game_data.replace("{account_id}", accountId.toString())}`;
        const gameList = await this.requestPSN(methode, url, header, null, true);
        this.log.debug(`LIST: ${JSON.stringify(gameList.data)}`);
        if (gameList.data) {
            await this.setState(`profile_remote.result`, { val: JSON.stringify(gameList.data), ack: true });
            return;
        }
        return {};
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
            await this.setState(`profile_remote.result`, { val: JSON.stringify(gametitle.data), ack: true });
            return;
        }
        return {};
    },
    async updateProfile(constants) {
        this.log.debug(`Start update profile!`);
        const methode = "get";
        let url = `${constants.BASE_PATH.account_uri}${constants.API_PATH.my_account}`;
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        let params;
        params = {
            params: {
                includeFields: "device,systemData",
                platform: "PS5,PS4,PS3,PSVita",
            },
        };
        const accountid = await this.requestPSN(methode, url, header, params, true);
        if (accountid && accountid.data && accountid.data.accountId) {
            this.log.debug(`accountid: ${JSON.stringify(accountid.data)}`);
            await this.json2iob.parse(`profile.account`, accountid.data, {
                write: false,
                forceIndex: true,
                channelName: "Account infos",
                autoCast: false,
            });
        } else {
            return;
        }
        this.accountId = accountid.data.accountId;
        url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.friends_summary.replace("{account_id}", accountid.data.accountId)}`;
        const friends_summary = await this.requestPSN(methode, url, header, undefined, true);
        if (friends_summary && friends_summary.data) {
            this.log.debug(`friends_summary: ${JSON.stringify(friends_summary.data)}`);
            await this.json2iob.parse(`profile.friends_summary`, friends_summary.data, {
                write: false,
                forceIndex: true,
                channelName: "Friends summary infos",
                autoCast: true,
            });
        } else {
            return;
        }
        url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.profiles.replace("{account_id}", accountid.data.accountId)}`;
        const profile = await this.requestPSN(methode, url, header, undefined, true);
        if (profile && profile.data && profile.data.onlineId) {
            this.log.debug(`profile: ${JSON.stringify(profile.data)}`);
            await this.json2iob.parse(`profile.profile`, profile.data, {
                write: false,
                forceIndex: true,
                channelName: "Profile infos",
                autoCast: true,
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
        const legacy = await this.requestPSN(methode, url, header, params, true);
        if (legacy && legacy.data && legacy.data.profile) {
            this.log.debug(`legacy: ${JSON.stringify(legacy.data)}`);
            await this.json2iob.parse(`profile.legacy`, legacy.data.profile, {
                write: false,
                forceIndex: true,
                channelName: "Legacy profile infos",
                autoCast: true,
            });
        } else {
            return;
        }
    },
    async loadAccount_id(accountId, constants) {
        if (!accountId) {
            this.log.warn(`Missing accoundId!!`);
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.profiles.replace("{account_id}", accountId.toString())}`;
        this.log.error(url);
        const resp = await this.requestPSN(methode, url, header, undefined, true);
        if (resp && resp.data) {
            await this.setState(`profile_remote.result`, { val: JSON.stringify(resp.data), ack: true });
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
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
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
        const resp = await this.requestPSN(methode, url, header, params, true);
        if (resp && resp.data && resp.data.profile) {
            await this.setState(`profile_remote.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            this.log.warn(`No data found for user ${val}`);
            return;
        }
    },
    async loadTrophy_id(val, constants) {
        if (!val) {
            this.log.warn(`Missing accoundId!!`);
            return;
        }
        const mergeTrophyLists = (titleTrophies, earnedTrophies) => {
            const mergedTrophies = [];
            for (const earnedTrophy of earnedTrophies) {
                const foundTitleTrophy = titleTrophies.find(t => t.trophyId === earnedTrophy.trophyId);
                mergedTrophies.push(normalizeTrophy({ ...earnedTrophy, ...foundTitleTrophy }));
            }
            return mergedTrophies;
        };
        const normalizeTrophy = trophy => {
            return {
                isEarned: trophy.earned ?? false,
                earnedOn: trophy.earned ? trophy.earnedDateTime : "unearned",
                type: trophy.trophyType,
                rarity: trophy.trophyRare ? rarityMap[trophy.trophyRare] : 0,
                earnedRate: Number(trophy.trophyEarnedRate),
                trophyName: trophy.trophyName,
                groupId: trophy.trophyGroupId,
            };
        };
        const rarityMap = {
            VeryRare: "Very Rare",
            UltraRare: "Ultra Rare",
            Rare: "Rare",
            Common: "Common",
        };
        const methode = "post";
        let url = `${constants.BASE_PATH.universal_search}`;
        const header = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        let params;
        params = {
            data: {
                searchTerm: val,
                domainRequests: [
                    {
                        domain: "SocialAllAccounts",
                    },
                ],
            },
        };
        const allAccountsSearchResults = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`allAccountsSearchResults: ${JSON.stringify(allAccountsSearchResults.data)}`);
        if (
            allAccountsSearchResults.data.domainResponses[0] &&
            allAccountsSearchResults.data.domainResponses[0].results[0] &&
            allAccountsSearchResults.data.domainResponses[0].results[0].socialMetadata
        ) {
            const targetAccountId =
                allAccountsSearchResults.data.domainResponses[0].results[0].socialMetadata.accountId;
            this.log.debug(`targetAccountId: ${targetAccountId}`);
            const url = `${constants.BASE_PATH.trophies}${constants.API_PATH.trophy_titles.replace("{account_id}", targetAccountId)}`;
            const header = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${this.session.access.access_token}`,
                },
            };
            const methode = "get";
            const trophyTitles = await this.requestPSN(methode, url, header, null, true);
            this.log.debug(`trophyTitles: ${JSON.stringify(trophyTitles.data)}`);
            const games = [];
            if (trophyTitles.data && trophyTitles.data.trophyTitles) {
                for (const title of trophyTitles.data.trophyTitles) {
                    const params = {
                        params: {
                            npServiceName: title.trophyTitlePlatform !== "PS5" ? "trophy" : "trophy2",
                        },
                    };
                    let url =
                        constants.BASE_PATH.trophies +
                        constants.API_PATH.trophies_for_title
                            .replace("{np_communication_id}", title.npCommunicationId)
                            .replace("{trophy_group_id}", "all");
                    const titleTrophies = await this.requestPSN(methode, url, header, params, true);
                    url =
                        constants.BASE_PATH.trophies +
                        constants.API_PATH.trophies_earned_for_title
                            .replace("{account_id}", targetAccountId)
                            .replace("{np_communication_id}", title.npCommunicationId)
                            .replace("{trophy_group_id}", "all");
                    const earnedTrophies = await this.requestPSN(methode, url, header, params, true);
                    if (
                        titleTrophies.data &&
                        titleTrophies.data.trophies &&
                        earnedTrophies.data &&
                        earnedTrophies.data.trophies
                    ) {
                        const mergedTrophies = mergeTrophyLists(
                            titleTrophies.data.trophies,
                            earnedTrophies.data.trophies,
                        );
                        games.push({
                            gameName: title.trophyTitleName,
                            platform: title.trophyTitlePlatform,
                            trophyTypeCounts: title.definedTrophies,
                            earnedCounts: title.earnedTrophies,
                            trophyList: mergedTrophies,
                        });
                    }
                }
            }
            await this.setState(`profile_remote.result`, { val: JSON.stringify(games), ack: true });
        }
    },
    async loadRequest(req, name, constants) {
        if (!this.accountId) {
            this.log.warn(`Missing accoundId!!`);
            return;
        }
        let limit;
        let url = "";
        limit = await this.getStateAsync(`profile_remote.limit`);
        if (!limit || !limit.val) {
            this.log.info(`Set limit 50!!`);
            limit = 50;
        }
        let params;
        params = { params: { limit: limit.val } };
        const methode = "get";
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        let response = [];
        if (req === "friend") {
            url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.friends_list.replace("{account_id}", this.accountId)}`;
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
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            if (resp.data.friends) {
                response = resp.data.friends;
                this.log.info(`User total: ${resp.data.totalItemCount}`);
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
            if (Object.keys(response).length) {
                const arr = [];
                for (const id of response) {
                    const url = `${constants.BASE_PATH.profile_uri}${constants.API_PATH.profiles.replace("{account_id}", id)}`;
                    const user = await this.requestPSN(methode, url, header, undefined, true);
                    if (user && user.data && user.data.onlineId) {
                        arr.push({ account_id: id, online_id: user.data.onlineId });
                    } else {
                        arr.push({ account_id: id, online_id: "Unknown" });
                    }
                }
                response = arr;
            }
        }
        await this.setState(`profile_remote.result`, { val: JSON.stringify(response), ack: true });
    },
};
