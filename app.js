const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from CI/CD Pipeline! 🚀</h1><p>Auto deployed via GitHub Actions</p>');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
