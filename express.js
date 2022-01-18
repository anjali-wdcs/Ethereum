const express = require('express');
const app = express();

app.use(express.json());

const books = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Math'},
    {id: 3, name: 'Science'},
    ];

app.get('/', (req,res)=> {
    res.send('My First Express App!');
});

app.get('/api/mybooks', (req,res)=> {
    res.send(books);
});

app.get('/api/mybooks/:id', (req,res)=> {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('The book with the given id is not found!...');
    res.send(book);
    });

app.post('/api/mybooks', (req,res)=> {
     const book = {
         id : books.length+1,
         name : req.body.name
        };
        books.push(book);
        res.send(book);
    });

//const port = process.env.PORT || 3000; (To set Environment variables)
//app.listen(port, () => console.log(`Listening on port ${port}...`));

app.listen(3000, () => console.log("listening on port 3000..."));
