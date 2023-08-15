import express  from 'express';
import { login } from './handler/login.handler';
import { createTransaction } from './handler/transaction.handler';
import { getReport } from './handler/report.handler';
import { setDiscount, getDiscount } from './handler/discount.handler';

// const util = require('util');

const app = express();
const port = 8080; // default port to listen

app.use(express.json())

// Defines the available routes for  Customers
app.post("/login/:customerId", async (req,  res) => {
    res.send(await login({customerId: req.params.customerId}));
});

app.post("/transaction", async (req, res) => {
    res.send(await createTransaction(req.body));
});

app.get("/discount",  async (req, res) => {
    res.send(await getDiscount());
});

// Defines the  available routes for the Admin
app.get("/report",  async (req, res) => {
    res.send(await getReport());
});

app.post("/discount",  async (req, res) => {
    res.send(await setDiscount({nthTransaction: req.body.nthTransaction, discountCode: req.body.discountCode}));
});

// start the Express server
app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});