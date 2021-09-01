// Set up express server
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/task-manager'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/task-manager/index.html'));
});

// Start the app by listening on the default Heroku port or local host
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})