"use strict";

module.exports = {
    async getFeaturesRetrieve(state, constants) {
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["origin"] = "https://store.playstation.com";
        header.headers["x-psn-store-locale-override"] = this.config.langPSN;
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({ tierLabel: state.val }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: constants.hashMap.featuresRetrieve },
                }),
            },
        };
        const url = `${constants.BASE_PATH.graph1_ql}${constants.API_PATH.getFeaturesRetrieve}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify(resp.data.data), ack: true });
        } else {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify({}), ack: true });
        }
        await this.setState(`profile_remote_store.total`, {
            val: 0,
            ack: true,
        });
    },
    async getProducts(state, constants) {
        let cat = await this.getStateAsync(`profile_remote_store.selectCategory`);
        if (!cat || !cat.val) {
            cat.val = "44d8bb20-653e-431e-8ad0-c0a365f68d2f";
        }
        const param = await this.getParameter();
        param.id = cat.val;
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["origin"] = "https://store.playstation.com";
        header.headers["x-psn-store-locale-override"] = this.config.langPSN;
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify(param),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: constants.hashMap.categoryGridRetrieve },
                }),
            },
        };
        const url = `${constants.BASE_PATH.graph1_ql}${constants.API_PATH.getCategoryGridRetrieve}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify(resp.data.data), ack: true });
        } else {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify({}), ack: true });
        }
        await this.setState(`profile_remote_store.total`, {
            val: 0,
            ack: true,
        });
    },
    async getWithConceptId(state, query, path, base) {
        const param = await this.getParameter();
        const size = param.pageArgs.size;
        let offset = param.pageArgs.offset;
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["origin"] = "https://store.playstation.com";
        header.headers["x-psn-store-locale-override"] = this.config.langPSN;
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({ conceptId: state.val, pageArgs: { size: size, offset: offset } }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: query },
                }),
            },
        };
        const url = `${base}${path}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        let count = 0;
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify(resp.data.data), ack: true });
            if (
                resp.data.data.conceptRetrieve &&
                resp.data.data.conceptRetrieve.defaultProduct &&
                resp.data.data.conceptRetrieve.defaultProduct.starRating &&
                resp.data.data.conceptRetrieve.defaultProduct.starRating.totalRatingsCount != null
            ) {
                count = resp.data.data.conceptRetrieve.defaultProduct.starRating.totalRatingsCount;
            }
        } else {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify({}), ack: true });
        }
        await this.setState(`profile_remote_store.total`, {
            val: count,
            ack: true,
        });
    },
    async getWithProductId(state, query, path, base) {
        const param = await this.getParameter();
        const size = param.pageArgs.size;
        let offset = param.pageArgs.offset;
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["origin"] = "https://store.playstation.com";
        header.headers["x-psn-store-locale-override"] = this.config.langPSN;
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({ productId: state.val, pageArgs: { size: size, offset: offset } }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: query },
                }),
            },
        };
        this.log.error(JSON.stringify(params));
        const url = `${base}${path}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        let count = 0;
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify(resp.data.data), ack: true });
            if (
                resp.data.data.conceptRetrieve &&
                resp.data.data.conceptRetrieve.defaultProduct &&
                resp.data.data.conceptRetrieve.defaultProduct.starRating &&
                resp.data.data.conceptRetrieve.defaultProduct.starRating.totalRatingsCount != null
            ) {
                count = resp.data.data.conceptRetrieve.defaultProduct.starRating.totalRatingsCount;
            }
        } else {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify({}), ack: true });
        }
        await this.setState(`profile_remote_store.total`, {
            val: count,
            ack: true,
        });
    },
    async getWithTitleId(state, query, path, base) {
        const param = await this.getParameter();
        const size = param.pageArgs.size;
        const offset = param.pageArgs.offset;
        const header = Object.assign({}, this.getHeader);
        header.headers["Content-Type"] = "application/json;charset=utf-8";
        header.headers["origin"] = "https://store.playstation.com";
        header.headers["x-psn-store-locale-override"] = this.config.langPSN;
        const methode = "get";
        const params = {
            params: {
                variables: JSON.stringify({ npTitleId: state.val, pageArgs: { size: size, offset: offset } }),
                extensions: JSON.stringify({
                    persistedQuery: { version: 1, sha256Hash: query },
                }),
            },
        };
        const url = `${base}${path}`;
        const resp = await this.requestPSN(methode, url, header, params, true);
        this.log.debug(`RESP: ${JSON.stringify(resp.data)}`);
        let count = 0;
        if (resp && resp.data && resp.data.data) {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify(resp.data.data), ack: true });
            if (resp.data.data.totalCount != null) {
                count = resp.data.data.totalCount;
            }
        } else {
            await this.setState(`profile_remote_store.result`, { val: JSON.stringify({}), ack: true });
        }
        await this.setState(`profile_remote_store.total`, {
            val: count,
            ack: true,
        });
    },
};
