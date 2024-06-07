const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.urlencoded ({extended: false}));
app.use(cookieParser());


app.get('/', (req, res) => {
    const user = req.cookies['user'];

    if(user){
        res.send(`Hello ${user}`)
    }else{

        res.send('Please Login')
    }
});

app.get('/login', (req, res) => {
    res.send(`
    <form action="/login" method="post">
    <label for="username">Username</label>
    <input type="text" name="username">
    <label for="password">password</label>
    <input type="password" name="password">
    <input type="submit" value="login">
</form>
        `);
});

app.post('/login', (req, res) => {
    res.cookie('user', req.body.username);
    res.end();
})

app.get('/logout', (req, res) =>{
    res.clearCookie('user');
    res.end();
})


app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000...')
})