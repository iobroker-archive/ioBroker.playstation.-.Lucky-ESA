"use strict";

module.exports = {
    async starRequest(base_path, variable, query, path) {
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["apollographql-client-name"] = "PlayStationApp-Android";
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({}),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: query },
                }),
            },
        };
        if (variable) {
            params.params.variables = JSON.stringify(variable);
        }
        const url = `${base_path}${path}`;
        this.log.error(JSON.stringify(url));
        this.log.error(JSON.stringify(params));
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_stars.result`, { val: JSON.stringify(resp.data), ack: true });
        } else {
            await this.setState(`profile_remote_stars.result`, { val: JSON.stringify({}), ack: true });
        }
    },
};
