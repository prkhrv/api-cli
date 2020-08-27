'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    user_name:{
        type:String
    },
    profile_pic_path:{
        type:String
    }

});


module.exports = mongoose.model('User',UserSchema);

