"use strict";

module.exports = {
    async loadGroups(constants, message) {
        let limit;
        limit = await this.getStateAsync(`profile_remote_groups.limit`);
        if (!limit || !limit.val) {
            this.log.info(`Set limit 50!!`);
            limit = 50;
        }
        let offset;
        offset = await this.getStateAsync(`profile_remote_groups.offset`);
        if (!offset || offset.val == null) {
            this.log.info(`Set offset 0!!`);
            offset.val = 0;
        }
        let fav = await this.getStateAsync(`profile_remote_groups.favorite`);
        if (!fav || !fav.val) {
            fav.val = "notFavorite";
        }
        const fields = await this.getStateAsync(`profile_remote_groups.fields`);
        const header = {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const params = {
            params: {
                favoriteFilter: fav.val,
                limit: limit.val,
                offset: offset.val,
            },
        };
        if (fields && fields.val != "") {
            params.params.includeFields = fields.val;
        }
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.my_groups}`;
        this.log.debug(`URL: ${url}`);
        this.log.debug(`PARAMS: ${JSON.stringify(params)}`);
        this.log.debug(`HEADER: ${JSON.stringify(header)}`);
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`GROUPS: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data && resp.data.groups) {
            await this.setState(`profile_remote_groups.total`, {
                val: resp.data.totalGroupCount != null ? resp.data.totalGroupCount : resp.data.nextOffset,
                ack: true,
            });
            const states = {};
            const obj = await this.getObjectAsync(`profile_remote_groups.selectGroup`);
            if (Object.keys(resp.data.groups).length > 0) {
                for (const group of resp.data.groups) {
                    states[group.groupId] = new Date(parseInt(group.modifiedTimestamp)).toISOString();
                    if (message) {
                        group.message = await this.loadMessages(group.groupId, constants, true);
                    }
                }
                obj.common.states = states;
                await this.setObjectAsync(`profile_remote_groups.selectGroup`, obj);
            } else {
                if (obj.common.states) {
                    delete obj.common.states;
                    await this.setObjectAsync(`profile_remote_groups.selectGroup`, obj);
                }
            }
            await this.setState(`profile_remote_groups.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_groups.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async loadMessages(state, constants, message) {
        if (!state) {
            return;
        }
        let limit;
        limit = await this.getStateAsync(`profile_remote_groups.limit`);
        if (!limit || !limit.val) {
            this.log.info(`Set limit 50!!`);
            limit = 50;
        }
        let offset;
        offset = await this.getStateAsync(`profile_remote_groups.offset`);
        if (!offset || offset.val == null) {
            this.log.info(`Set offset 0!!`);
            offset.val = 0;
        }
        const header = {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "get";
        const params = {
            params: {
                limit: limit.val,
                offset: offset.val,
            },
        };
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.conversation.replaceAll("{group_id}", state)}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`MESSAGE: ${JSON.stringify(resp.data)}`);
        if (message) {
            return resp.data;
        }
        if (resp && resp.data && resp.data) {
            await this.setState(`profile_remote_groups.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_groups.result`, { val: JSON.stringify({}), ack: true });
        }
    },
    async leaveGroup(constants) {
        const npId = await this.getStateAsync(`profile.legacy.npId`);
        if (!npId || npId.val == null) {
            return;
        }
        const dec = await this.npIdDecode(npId.val);
        const country = dec.toString().split(".");
        if (!country[1]) {
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "com.sony.snei.np.android.sso.share.oauth.versa.USER_AGENT",
                Country: country[1].toUpperCase(),
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "post";
        const groupId = await this.getStateAsync(`profile_remote_groups.selectGroup`);
        if (!groupId || groupId.val == null) {
            return;
        }
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.leave_group.replace("{group_id}", groupId.val)}`;
        const resp = await this.requestPSN(methode, url, header, null, true);
        this.log.debug(`Leave: ${JSON.stringify(resp.data)}`);
    },
    async createGroup(state, constants) {
        if (!state || state.val == null || typeof state.val !== "string") {
            return;
        }
        const users = JSON.stringify(state.val);
        const account_ids = [];
        for (const user of users) {
            account_ids.push({ accountId: user });
        }
        const params = {
            data: { invitees: account_ids },
        };
        const npId = await this.getStateAsync(`profile.legacy.npId`);
        if (!npId || npId.val == null) {
            return;
        }
        const dec = await this.npIdDecode(npId.val);
        const country = dec.toString().split(".");
        if (!country[1]) {
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "com.sony.snei.np.android.sso.share.oauth.versa.USER_AGENT",
                Country: country[1].toUpperCase(),
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "post";
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.create_group}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`Create: ${JSON.stringify(resp.data)}`);
    },
    async settingGroup(state, constants) {
        if (!state || state.val == null || typeof state.val !== "string") {
            return;
        }
        const npId = await this.getStateAsync(`profile.legacy.npId`);
        if (!npId || npId.val == null) {
            return;
        }
        const dec = await this.npIdDecode(npId.val);
        const country = dec.toString().split(".");
        if (!country[1]) {
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "com.sony.snei.np.android.sso.share.oauth.versa.USER_AGENT",
                Country: country[1].toUpperCase(),
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "post";
        const params = {
            data: JSON.parse(state.val),
        };
        const groupId = await this.getStateAsync(`profile_remote_groups.selectGroup`);
        if (!groupId || groupId.val == null) {
            return;
        }
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.group_settings.replace("{group_id}", groupId.val)}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`Settings: ${JSON.stringify(resp.data)}`);
    },
    async inviteMembers(state, constants) {
        if (!state || state.val == null || typeof state.val !== "string") {
            return;
        }
        const users = JSON.stringify(state.val);
        const account_ids = [];
        for (const user of users) {
            account_ids.push({ accountId: user });
        }
        const params = {
            data: { invitees: account_ids },
        };
        const npId = await this.getStateAsync(`profile.legacy.npId`);
        if (!npId || npId.val == null) {
            return;
        }
        const dec = await this.npIdDecode(npId.val);
        const country = dec.toString().split(".");
        if (!country[1]) {
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "com.sony.snei.np.android.sso.share.oauth.versa.USER_AGENT",
                Country: country[1].toUpperCase(),
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "post";
        const groupId = await this.getStateAsync(`profile_remote_groups.selectGroup`);
        if (!groupId || groupId.val == null) {
            return;
        }
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.invite_members.replace("{group_id}", groupId.val)}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`Invitees: ${JSON.stringify(resp.data)}`);
    },
    async kickMember(state, constants) {
        if (!state || state.val == null) {
            return;
        }
        const npId = await this.getStateAsync(`profile.legacy.npId`);
        if (!npId || npId.val == null) {
            return;
        }
        const dec = await this.npIdDecode(npId.val);
        const country = dec.toString().split(".");
        if (!country[1]) {
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "com.sony.snei.np.android.sso.share.oauth.versa.USER_AGENT",
                Country: country[1].toUpperCase(),
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "post";
        const groupId = await this.getStateAsync(`profile_remote_groups.selectGroup`);
        if (!groupId || groupId.val == null) {
            return;
        }
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.kick_member.replace("{group_id}", groupId.val).replace("{account_id}", state.val.toString())}`;
        const resp = await this.requestPSN(methode, url, header, null, true);
        this.log.debug(`Kick: ${JSON.stringify(resp.data)}`);
    },
    async sendGroupMessage(state, constants) {
        if (!state || state.val == null || typeof state.val !== "string") {
            return;
        }
        const params = {
            data: { messageType: 1, body: state.val },
        };
        const npId = await this.getStateAsync(`profile.legacy.npId`);
        if (!npId || npId.val == null) {
            return;
        }
        const dec = await this.npIdDecode(npId.val);
        const country = dec.toString().split(".");
        if (!country[1]) {
            return;
        }
        const header = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "com.sony.snei.np.android.sso.share.oauth.versa.USER_AGENT",
                Country: country[1].toUpperCase(),
                "Accept-Language": `${this.lang};q=1`,
                Authorization: `Bearer ${this.session.access.access_token}`,
            },
        };
        const methode = "post";
        const groupId = await this.getStateAsync(`profile_remote_groups.selectGroup`);
        if (!groupId || groupId.val == null) {
            return;
        }
        const url = `${constants.BASE_PATH.gaming_lounge}${constants.API_PATH.send_group_message.replace("{group_id}", groupId.val)}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`Invitees: ${JSON.stringify(resp.data)}`);
    },
};
