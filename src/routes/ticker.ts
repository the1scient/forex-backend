const websocket = require('isomorphic-ws')
const protobuf = require("protobufjs");

// @ts-ignore
const express = require('express');
// @ts-ignore
const router = express.Router();

// @ts-ignore
const Model = require('../models/database');

const root = new protobuf.Root().loadSync('./YPricingData.proto', {keepCase: true});

const Yaticker = root.lookupType("yaticker");
const ws = new websocket('wss://streamer.finance.yahoo.com');

function connect() {

    ws.onopen = function open() {
        console.log('connected');
        ws.send(JSON.stringify({
            subscribe: ['GBPUSD=X']
        }));
    };

    ws.onclose = function close() {
        console.log('[WEBSOCKET] Disconnected');
        // time to connect again
        setTimeout(function () {
            connect();
        }, 1000)
    };


    ws.onmessage = function incoming(data: any) {
        console.log('================================= [WEBSOCKET UPDATE] =================================')

        let res = Yaticker.decode(new Buffer(data.data, 'base64'));

        console.log(res['price']);

    };

}

connect();

module.exports = router;




