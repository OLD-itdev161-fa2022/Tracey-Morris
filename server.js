import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator'

//intialize express applicaion
const app = express();

//Connect database
connectDatabase();

// configure Middleware
app.use(express.json({extended: false }));

//API endpoints
/** 
* @route GET /
* @desc Test endpoint
*/
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')    
);

/**
 * @route POST api/users
 * @desc Register user
 */
app.post
('/api/users',
[
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more Character').isLength({ min: 6})
],

(req, res) => {
    const error =validationResult(req);
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
        return res.send(req.body);
    }
    console.log(req.body);
    res.send(req.body);
    }
);

//Connection listener
app.listen(3000, () => console.log('Express server running on part 3000'));
