const buildUrl = (url, queryPath, queryParams = {}) => {
    url = url.endsWith('/') ? url : `${url}/`;
    queryPath = queryPath instanceof Array ? queryPath.join('/') : queryPath;
    if (Object.keys(queryParams).length) {
        queryPath = queryPath.concat('?');
    }
    return `${url}${queryPath}${
        Object.entries(queryParams)
            .map(
                ([k, v]) => `${k}=${v}`
            ).join('&')
    }`;
};

export default buildUrl;
