const {Schema, model} = require('mongoose')

module.exports = model(
    "guilds", new Schema(
        {
            _id: String,
            djRoles: {type: Array, default: null},
            voiceChannels: {type: Array, default: null},
            announcements: {type: Boolean, default: null},
        },
        {versionKey: false}
    )
)