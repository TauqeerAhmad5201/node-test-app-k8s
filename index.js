const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    // Send a specific file using sendFile
    res.sendFile(path.join(__dirname, 'public', 'html/main.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})