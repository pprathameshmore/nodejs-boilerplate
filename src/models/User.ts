import { Schema, model } from 'mongoose';
import timestamp from 'mongoose-timestamp';

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
});

userSchema.plugin(timestamp);

export default model('User', userSchema);
