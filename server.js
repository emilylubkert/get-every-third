const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//return every 3rd letter from string
const getEveryThird = (req, res) => {
  const { string_to_cut } = req.body;
  if (string_to_cut.length < 3) {
    console.log('Error: Initial string must be at least 3 characters');
    res.send({ Error: 'Initial string must be at least 3 characters' });
    return;
  }
  try {
    let characters = [];
    for (i = 2; i < string_to_cut.length; i += 3) {
      characters.push(string_to_cut.charAt(i));
    }
    let newString = characters.join('');
    console.log('response', { return_string: newString });
    res.status(201).json({ return_string: newString });
  } catch (error) {
    console.log(error);
  }
};

app.post('/test', getEveryThird);

app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running...`);
});
