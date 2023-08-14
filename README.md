# symetra-project

npm i

npm run build

npm run start

Admin should create a Discount.
- curl -X POST http://localhost:8080/discount -H "Content-Type: application/json" -d '{"n": 2, "code": "test-code"}'

Admin can get a report.
- curl http://localhost:8080/report

Customer needs to login before making any transactions.
- curl -X POST http://localhost:8080/login/john/

Customer can check the status of their discounts.