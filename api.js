const axios = require('axios');
const querystring = require('querystring');

async function publicCall(path, data, method = 'GET') {
    try {

        const qs = data ? `?${querystring.stringify(data)}` : '';
        const result = await axios ({
            method, 
            url: `${process.env.API_URL}${path}`

        })
        return result.data;
    }

    catch(err) {
        console.log(err);
    }
}

async function time() {
    return publicCall('/v3/time')
}

async function depth( symbol = 'XRPBRL') {
    return publicCall('/v3/depth', {symbol, limit })
}

module.exports = { time }