import Centrifuge from 'centrifuge';
import WebSocket from 'ws';
import { emitter } from '../subscribers/eventEmitter';
import events from '../subscribers/events';
import config from '../configs';

/* You can use any event bus for pub/sub model */

//https://centrifugal.github.io/

export const centrifuge = new Centrifuge(config.CENTRIFUGE.HOST, {
    websocket: WebSocket,
});

centrifuge.setToken(config.CENTRIFUGE.JWT);

centrifuge.on('connect', () => {
    // now client connected to Centrifugo and authorized
    console.log('Connected to Centrifuge Event Bus');
});

/* Events from Event Bus */
const postsSub = centrifuge.subscribe('posts', (ctx) => {
    emitter.emit(events.post.onPostCreated, ctx);
});

postsSub
    .history()
    .then((response) => {
        // history messages received
        emitter.emit(events.post.onPostCreated, response.publications);
    })
    .catch((error) => {
        console.log('History errors');
        console.log(error);
    });

centrifuge.on('disconnect', (context) => {
    console.log('Disconnected', context);
});

/* Subscribers */
import '../subscribers';

centrifuge.connect();
