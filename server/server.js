const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

MongoClient.connect('./mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('userMovies');
        const movieCollection = db.collection('userMovies');
        const movieRouter = createRouter(movieCollection)
        app.use('/api/userMovies', movieRouter);
    })
    .catch(console.err);

    app.listen(9000, function(){
        console.log(`listening on port ${ this.address().port}`)
    })

