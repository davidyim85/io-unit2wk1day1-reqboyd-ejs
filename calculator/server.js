const express = require('express');
const app = express();


//*************** */
//middleware here
//NOTE: middleware is BEFORE the ROUTE SECTION. This is very important
//*************** */
app.use(express.json());



//*************** */
//routes here
//*************** */
app.get('/', (req, res) => {
    res.send(`<h1>Hello world.</h1>`);
});


//1. create a variable and set that equal to 0
let x = 0;

// create a route that returns the variable
app.get('/calculator', (req, res) => {
    // res.send('hello world');  //res.send ONLY allows sending of strings!
    // res.send(`${x}`); //stringifying this 0 to be '0'
    // JSON.stringify allows us to stringify json


 
    res.json({ total: x });
});

//create POST route 
app.post('/calculator', (req, res) => {
    const number = req.body.number;
    const operation = req.body.operation;

    //if the operation is add, im going going increase x value by the number's value
    if(operation === 'add'){
        x = x + number
    }

    // if the operation is subtact, im going ot decreace by number's value
    if(operation === 'subtract'){
        x = x - number
    }

    //if the keys are the same as the variable that hold the values, we can use short hand like below
    res.json({ number, operation, total: x,    });
    /*
    same as this: res.json({ number: number, operation: operation, total: x })
     */
});







//*************** */
// End of routes
//*************** */


//have the express application listen to port 3000 
app.listen(3000, () => {
    console.log('Server listening on port 3000.');
});

