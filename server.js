const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const getEveryThird = (req, res) => {
  const { string_to_cut } = req.body;
  try {
    if (string_to_cut.length < 3) {
      throw new Error('Initial string must be at least 3 characters');
    }
    if (typeof string_to_cut != "string") {
        throw new Error('Check string and try again');
      }
    let characters = [];
    for (i = 2; i < string_to_cut.length; i += 3) {
      characters.push(string_to_cut.charAt(i));
    }
    let newString = characters.join('');
    console.log('response', { return_string: newString });
    res.status(200).json({ return_string: newString });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log('Error: ', error.message);
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
