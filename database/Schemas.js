var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var RolesSchema = new Schema({
    role: {type: String}
});

var UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    enabled: Boolean,
    account_expired: Boolean,
    account_locked: Boolean,
    password_expired: Boolean,
    roles: [RolesSchema]
});

var User = mongoose.model('user', UserSchema);
exports.User = User;

var Roles = mongoose.model('roles', RolesSchema);
exports.Roles = Roles;
