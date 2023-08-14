import express  from 'express';
import { login } from './handler/login';
import { transaction } from './handler/transaction.handler';
import { getDiscount } from './handler/get-discount.handler';
import { getReport } from './handler/get-report.handler';
import { setDiscount } from './handler/set-discount.handler';

// const util = require('util');

const app = express();
const port = 8080; // default port to listen

app.use(express.json())

// Defines the available routes for  Customers
app.post("/login/:customerId", async (req,  res) => {
    res.send(await login({customerId: req.params.customerId}));
    // return a Discount
});

app.post("/transaction", async (req, res) => {
    // parameters: item[], discountCode
    res.send(await transaction(req.body));
});

app.get("/customer/:customerId/discount",  async (req, res) => {
    res.send(await getDiscount({customerId: req.params.customerId}));
    // return a Discount
});

// Defines the  available routes for the Admin
app.get("/report",  async (req, res) => {
    res.send(await getReport());
    // return purchaseCount, discountCount
});

app.post("/discount",  async (req, res) => {
    //  parameters: n: string, code: string
    res.send(await setDiscount({numberOfLogins: req.body.n, discountCode: req.body.code}));
});

// start the Express server
app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});