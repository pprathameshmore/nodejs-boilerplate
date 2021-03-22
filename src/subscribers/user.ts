import { emitter } from './eventEmitter';
import events from './events';

/* 1. Listen for event which are emitted by Centrifugo Event Bus */

emitter.on(events.post.onPostCreated, async ({ data }) => {
    try {
        /* Process the incoming data if required this service */
    } catch (error) {
        throw error;
    }
});

emitter.emit(events.user.userCreated, async () => {
    try {
        /* Publish event in this service */
    } catch (error) {
        throw error;
    }
});
