const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/zack-bot', (req, res) => {
  res.send('Received POST from SnapEngage...')
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});