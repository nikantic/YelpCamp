var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3290/3753652230_8139b7c717.jpg",
        description: "Sed purus lorem, hendrerit a diam vitae, mollis sodales arcu. Aliquam erat volutpat. Vestibulum arcu lorem, efficitur in mauris eu, sodales accumsan nisi. Sed interdum eleifend dolor, vitae lacinia libero euismod at. Mauris vitae ante nec arcu dignissim vulputate ac quis sem. Cras eros nisl, accumsan quis tempus eu, gravida at augue. Praesent egestas neque ac lectus sagittis, hendrerit luctus ante pharetra. Nulla vestibulum nisi vitae erat dapibus efficitur. Aenean tempor nulla risus, id pretium libero commodo ut. Nam aliquet turpis ac eros cursus pharetra."
    },
    {
        name: "Desert Mesa",
        image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg",
        description: "Sed purus lorem, hendrerit a diam vitae, mollis sodales arcu. Aliquam erat volutpat. Vestibulum arcu lorem, efficitur in mauris eu, sodales accumsan nisi. Sed interdum eleifend dolor, vitae lacinia libero euismod at. Mauris vitae ante nec arcu dignissim vulputate ac quis sem. Cras eros nisl, accumsan quis tempus eu, gravida at augue. Praesent egestas neque ac lectus sagittis, hendrerit luctus ante pharetra. Nulla vestibulum nisi vitae erat dapibus efficitur. Aenean tempor nulla risus, id pretium libero commodo ut. Nam aliquet turpis ac eros cursus pharetra."
    },
        {
        name: "Canyon Floor",
        image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg",
        description: "Sed purus lorem, hendrerit a diam vitae, mollis sodales arcu. Aliquam erat volutpat. Vestibulum arcu lorem, efficitur in mauris eu, sodales accumsan nisi. Sed interdum eleifend dolor, vitae lacinia libero euismod at. Mauris vitae ante nec arcu dignissim vulputate ac quis sem. Cras eros nisl, accumsan quis tempus eu, gravida at augue. Praesent egestas neque ac lectus sagittis, hendrerit luctus ante pharetra. Nulla vestibulum nisi vitae erat dapibus efficitur. Aenean tempor nulla risus, id pretium libero commodo ut. Nam aliquet turpis ac eros cursus pharetra."
    }
    ];
    
function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground!");
                    // add a few comments
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet.",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();  
                                console.log("Added a new comment!");
                            }
                        });
                }    
            });
        });
    });
}

module.exports = seedDB;