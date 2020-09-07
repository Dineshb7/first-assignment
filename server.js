//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static( 'C:/Users/dinesh/Documents/first-app/first-assignment/dist'));
console.log("GHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH", 'C:/Users/dinesh/Documents/first-app/first-assignment/dist')
app.get('/*', function(req,res) {
    
res.sendFile(path.join('C:/Users/dinesh/Documents/first-app/first-assignment/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);