const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Static server running at http://0.0.0.0:${port}`);
});
