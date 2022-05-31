import mongoose from "mongoose";
import bcrypt from "bcryptjs/dist/bcrypt";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    gifs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gif'
    }]
})

UserSchema.pre('save', function(next) {
    const user = this;
    if(user.isModified('password') || user.isNew) {
        bcrypt.genSalt(10, function(saltError, salt) {
            if(saltError) {
                console.log(saltError)
                return next(saltError)
            } else {
                bcrypt.hash(user.password, salt, function(hashError, hash) {
                    if(hashError) {
                        console.log(hashError)
                        return next(hashError)
                    }

                    user.password = hash;
                    return next();
                })
            }
        })
    } else {
        // user already exists
        return next();
    }
})

UserSchema.methods.comparePassword = function(usersPassword, cb) {
    bcrypt.compare(usersPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
    })
}

export default mongoose.model('user', UserSchema);

