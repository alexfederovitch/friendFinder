const friends = require('../data/friends.js');
const server = require('../../server.js');
let path = require("path");

module.exports = function(app){

    app.get('/friends', function (req, res){
        res.json(friends);
    });

    app.post('/friends', function(req, res){

        let friendMatch = {
            name: "",
            photo: "",		
            friendDifference: 1000
        };
    
        let userInput 	= req.body;
        let userName 	= userInput.name;
        let userPhoto 	= userInput.photo;
        let userValues 	= userInput.values;
    
        let totalDifference = 0;
    
        for  (let i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
    
            for (let g = 0; g < userValues.length; g++){
    
                totalDifference += Math.abs(parseInt(userValues) - parseInt(friends[i].values[g]));
                // console.log(totalDifference);
    
                if (totalDifference <= friendMatch.friendDifference){
    
                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDifference = totalDifference;
                }
            }
        }
    
        friends.push(userInput);
    
        res.json(friendMatch);
    
    });

};


