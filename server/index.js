require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const controller = require('./controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db);
    console.log("connected to database");
}).catch(err => {
    console.log(err);
})


//ENDPOINTS
app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.addProduct);
app.delete('/api/product/:id', controller.deleteProduct);

app.listen(SERVER_PORT, ()=>console.log(`server listening on: ${SERVER_PORT}`));