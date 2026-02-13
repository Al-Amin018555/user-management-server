const express = require("express");
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

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

app.post('/users', (req, res) => {
    console.log('users post method');
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)

})

app.listen(port, () => {
    console.log(`Users server is running on ${port}`)
})