const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {type: String, required: true},    
    lastname: {type: String, required: true},    
    username: {type: String, required: true},    
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    wishlist: {type: Array}
}
)

UserSchema.set("toJSON",{
    transform(doc, ret) {
        delete ret.__v;
        delete ret._id;
        delete ret._password;
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;