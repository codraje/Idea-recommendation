const express = require('express');
const bodyParser = require('body-parser');
const ideasRouter = require('./routes/ideas');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/ideas', ideasRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
