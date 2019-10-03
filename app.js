const express = require('express');
const path = require('path'); // path lets us navigate the file system / folders

// heroku assigns a port when it deploys via the process (environment variables, coming soon )
// locally this will run @ port 3000; remotely it'll run wherever heroku tells it to run
const port = process.env.PORT || 3000; //double pipe means "or"

const app = express();

app.use(express.static('public'));

// a forward slash is the home route (same as index.html)
app.get('/', (req, res) => {
  console.log('at the home route');
  res.sendfile(path.join(__dirname + '/views/index.html'));
  // this builds localhost:3000/views/index.html
})


app.listen(port, () => {
  console.log(`Server running at ${port}`)
})