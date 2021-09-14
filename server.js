import express from 'express';
import connectDatabase from './config/db';

//intialize express applicaion
const app = express();

//Connect database
connectDatabase();

//API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')    
);

//Connection listener
app.listen(3000, ()=> console.log('Express server running on part 3000'));
