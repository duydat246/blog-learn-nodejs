const express = require('express');
const app = express();
const port = 2406;

app.get('/', (req, res) => {
    let a = 1;
    let b = 2 ;

    let c = a + b;


    return res.send("Hello World");
})

app.listen(port, () => {
    console.log(`listening on port ${port} 😂 `);
})