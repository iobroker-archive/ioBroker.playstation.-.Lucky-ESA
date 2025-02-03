"use strict";

module.exports = {
    async getTips(val, constants) {
        let data = [];
        try {
            data = JSON.parse(val);
        } catch (e) {
            this.log.warn(`Parse error: ${e}`);
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": this.lang,
                "apollographql-client-name": "PlayStationApp-Android",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({
                    npCommId: data[0],
                    trophies: { trophyId: data[1], udsObjectId: data[2], helpType: data[3] },
                }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: constants.hashMap.metGetTips },
                }),
            },
        };
        const url = `${constants.BASE_PATH.graph_ql}${constants.API_PATH.getTips}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data && resp.data) {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_profile.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async getHintAvailability(npCommId, constants) {
        const header = {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": this.lang,
                "apollographql-client-name": "PlayStationApp-Android",
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({ npCommId: npCommId }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: constants.hashMap.metGetHintAvailability },
                }),
            },
        };
        const url = `${constants.BASE_PATH.graph_ql}${constants.API_PATH.getHintAvailability}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data) {
            await this.setState(`profile_remote_trophies.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_trophies.result`, { val: JSON.stringify({}), ack: true });
        }
    },
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
            await this.setState(`profile_remote_trophies.result`, {
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
            await this.setState(`profile_remote_trophies.result`, {
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
            await this.setState(`profile_remote_trophies.result`, {
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
            await this.setState(`profile_remote_trophies.result`, {
                val: JSON.stringify(trophy_title.data),
                ack: true,
            });
            return;
        }
        return {};
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
            await this.setState(`profile_remote_trophies.result`, { val: JSON.stringify(games), ack: true });
        }
    },
};
