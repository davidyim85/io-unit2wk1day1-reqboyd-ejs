const express = require('express');
const app = express();


//****************** */
//Route Section
//****************** */

//render our first ejs file
app.get('/', (req, res) => {
    res.render('home.ejs'); //express knows to look for home.ejs in the views (that is V I E W S - with an S) folder
    //express will automatically look into that view folder, find the template matching 'home.ejs' and render that
});

//res.send this sends string
//res.json this sends JSON
//res.render this sends HTML


app.get('/hometwo', (req, res) => {
    //finish this code
    res.render(
        'homeTwo.ejs',
        {
            msg: 'hello squids!!',
            player: {
                name: 'david'
            }
        }
    );
});


app.get('/homethree', (req, res) => {
    res.render('homeThree.ejs', { names: ['david', 'kyle', 'joy', 'dennis']})
})



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})