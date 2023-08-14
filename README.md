# symetra-project

#### Install Packaged
`npm i`

#### Build
`npm run build`

#### Start Server
`npm run start`

#### Endpoints
##### Customer Endpoints
- `POST /login/{customerId}`

- `GET /discount`

- `POST /transaction`
body: {
    customerId: string;
    items: string[];
    discountCode: string; // optional
}

##### Admin Endpoints
- `POST /discount`
body: {
    n: number;
    code: string;
}

- `GET /report`


#### Sample Usage
An Admin should initially make a `POST` request to `/discount` to create a discount code and frequency at which it becomes active. The Admin can at any point make a `GET` request to `/report` to get insight into the transactions made with and without discount codes. 

A Customer can login at `POST` `/login/{customerId}`. The customer will be informed if there is an active discount code available, and if so what the code is. Logging in is not critical, rather just simulating signing onto the customers account. A customer can make a `GET` request to `/discount` at any point to see the status of the discount, and if it is active, to get the code.

A Customer can make a `POST` request to `/transaction` with a body to purchase some items. The Customer is best off making a `GET` request to `/discount` to see if there is a discount code available to apply to the transaction, although this is not required. A customer does not need to be logged in before making a transaction for this iteration.

Sample Requests
Admin Create Discount
- `curl -X POST http://localhost:8080/discount -H "Content-Type: application/json" -d '{"n": 2, "code": "test-code"}'`

Admin Get Report.
- `curl http://localhost:8080/report`

Get Discount status
- `curl http://localhost:8080/discount`

Customer Login
- `curl -X POST http://localhost:8080/login/john`

Customer Create Transaction (w/o discount code)
- `curl -X POST http://localhost:8080/transaction -H "Content-Type: application/json" -d '{"customerId": "john", "items": ["food"]}'`

Customer Create Transaction (w/ discount code)
- `curl -X POST http://localhost:8080/transaction -H "Content-Type: application/json" -d '{"customerId": "john", "items": ["food"], "discountCode": "test-code"}'`