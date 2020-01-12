const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRouter = require('./routes/api');
console.log(process.env.PORT);
const port = Number(process.env.PORT);
const app = express();
const server = require('http').Server(app);

app.use(bodyParser({ limit: '5mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/budgetbuddy')));

app.use('/api', apiRouter);
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/budgetbuddy/index.html'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
