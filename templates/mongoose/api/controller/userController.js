'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

var fs = require('fs');



exports.add_a_user = function(req,res,next){
    User.create({
        user_name:req.body.user_name,
        profile_pic_path:req.files.profile_pic_path[0].filename
    },function(err,user){
        if(err){
            res.send(err);
        }else{
            res.json(user);
        }

    });
};


exports.view_a_user = function(req,res,next){
    User.findOne({_id:"5d3eda92729bad335c8db950"},function(err,user){
        var filePath = "uploads/" + user.profile_pic_path;
        fs.readFile(filePath,function(err,file){
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(file);

        });
        // res.json(filePath);

    })
}