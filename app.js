import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(data);
    console.log(`Your server is running on PORT ${PORT}`);
});
