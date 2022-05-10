const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//return every 3rd letter from string
const getEveryThird = (req, res) => {
    const { string_to_cut } = req.body;
    try {
      let characters = [];
      for (i = 2; i < string_to_cut.length; i += 3) {
          characters.push(string_to_cut.charAt(i));
      }
      let newString = characters.join("");
      if (newString.length === 0) {
        console.log("Error: Initial string must be at least 3 characters");
        res.send({"Error": "Initial string must be at least 3 characters"});
      }
      else {
        const returnStrObj = { return_string: newString };
        console.log('return', returnStrObj);
        res.status(201).json(returnStrObj);
      }
    } catch (error) {
      console.log(error);
    }
  }
app.post('/test', getEveryThird);

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running...`);
});
