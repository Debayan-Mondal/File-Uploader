const express = require('express');

const app = express();

const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/',(req,res) => {
    res.status(200).render('Test')
})

app.listen(PORT, (err) => {
    if(err) {
        throw err;
    }
    console.log(`App listening at ${PORT}`);
})