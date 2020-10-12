import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // return res.send(`A get request with / route on port ${PORT}`);

    /* GET the data first and then send it to client */
    return res.json(data);
});


app.post('/newItem', (req, res) => {
    return res.send(`A post request with /newItem route on port ${PORT}`);
});


app.put('/item', (req, res) => {
    return res.send(`A put request with /item route on port ${PORT}`);
});


app.delete('/item', (req, res) => {
    return res.send(`A delete request with /item route on port ${PORT}`);
});


app.listen(PORT, () => {
    console.log(data);
    console.log(`Your server is running on PORT ${PORT}`);
});
