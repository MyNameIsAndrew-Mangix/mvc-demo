const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Controllers
const dataController = require('./controllers/dataController');

// Routes
app.use('/data', dataController);

app.use(express.static('public'))
app.use(express.static('views'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
