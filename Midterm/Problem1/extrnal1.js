
// Create a JavaScript object
var Tweet={
    tweetId:"123456789",
    timestamp: "Wed 19 Jan 2011 20:57:35 +0000",
    userId: "987654321",
    userName: "TwitterLover",
    tweetText: "what a nice sunny day!"
    };
    
    function display(){
    
        document.getElementById('info').innerHTML="TweetId: "+ Tweet.tweetId+ "<br>" +
                                                " TimeStamp: "+Tweet.timestamp+ "<br>" +
                                                " UserId: "+Tweet.userId+  "<br>" +
                                                " User Name: "+Tweet.userName+  "<br>" +
                                                " Tweet Text: "+Tweet.tweetText;
                                                
    }