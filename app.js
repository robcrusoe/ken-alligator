import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;


/* Adds middleware for the 'public' folder on path '/' */
app.use(express.static('public/images'));


/* Adds middleware for the 'images' folder on path '/images' */
app.use('/images', express.static('images'));


/* Using built-in middlewares */
// 'express.json()' -> Method to use JSON
// app.use(express.json());

// 'express.urlencoded()' -> Method to use URLEncoded
app.use(express.urlencoded({
    extended: true
}));


app.post('/newWay', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.get('/', (req, res) => {
    // return res.send(`A get request with / route on port ${PORT}`);

    /* GET the data first and then send it to client */
    res.json(data);
});


app.get('/item/:id', (req, res, next) => {
    console.log(req.params.id);

    /* Converts the param (id) of type 'string' to type 'number' */
    let userId = Number(req.params.id);


    /* Everything above this is 'middleware' */
    res.send(data[userId - 1]);
    next();
}, (req, res) => {
    console.log('Did you get the right data?');
});


app.get('/item', (req, res) => {
    res.download('images/master.jpg');
    // res.redirect('http://www.linkedin.com');
    // res.end();
});


app.post('/newItem', (req, res) => {
    res.send(`A post request with /newItem route on port ${PORT}`);
});


app.put('/item', (req, res) => {
    res.send(`A put request with /item route on port ${PORT}`);
});


app.delete('/item', (req, res) => {
    res.send(`A delete request with /item route on port ${PORT}`);
});


/* Chaining Routes */
app.route('/way')
    .get((req, res) => {
        res.send(`A get request with /way route on Port ${PORT}`);
    })
    .put((req, res) => {
        res.send(`A put request with /way route on Port ${PORT}`);
    })
    .delete((req, res) => {
        res.send(`A delete request with /way route on Port ${PORT}`);
    })
    .post((req, res) => {
        res.send(`A post request with /way route on Port ${PORT}`);
    });


app.listen(PORT, () => {
    console.log(data);
    console.log(`Your server is running on PORT ${PORT}`);
});
