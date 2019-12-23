const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors');
const db = require('./models');

const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(cors({
    origin: 'http://localhost:4200',
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options('*', cors())


app.all('', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Auth Each API Request created by user.
    next();
});

//adding middle
app.use(cors());
app.use(express.static(__dirname + '/static'));

app.get("/",(req,res)=>{
	res.send("App Connected");
})

app.get('/api/games', (req, res) => {
  return db.Games.findAll()
    .then((games) => res.send(games))
    .catch((err) => {
      console.log('There was an error querying games', JSON.stringify(err))
      return res.send(err)
    });
});

app.get('/api/games/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Games.findById(id)
    .then((games) => res.send(games))
    .catch((err) => {
      console.log('There was an error querying games', JSON.stringify(err))
      return res.send(err)
    });
});

app.post('/api/games', (req, res) => {
  const { gamesId, gamesName } = req.body
  return db.Games.create({ gamesId, gamesName })
    .then((game) => res.send(game))
    .catch((err) => {
      console.log('***There was an error creating a game', JSON.stringify(game))
      return res.status(400).send(err)
    })
});

app.delete('/api/games/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Games.findById(id)
    .then((game) => game.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting contact', JSON.stringify(err))
      res.status(400).send(err)
    })
});

app.put('/api/games/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Games.findById(id)
  .then((game) => {
    const { gamesId, gamesName } = req.body
    return game.update({ gamesId, gamesName })
      .then(() => res.send(game))
      .catch((err) => {
        console.log('***Error updating game', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});