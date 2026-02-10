const express = require("express");
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors());

const users = [
    { id: 1, name: 'shabana', email: 'shabana@gmai.com' },
    { id: 2, name: 'shabnoor', email: 'shabnoor@gmai.com' },
    { id: 3, name: 'sabila', email: 'sabila@gmai.com' },
];

app.get('/', (req, res) => {
    res.send("Users server is running")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Users server is running on ${port}`)
})