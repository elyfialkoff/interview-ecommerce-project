import { Customer } from "../interface/customer.interface";
import { getDiscount } from "./discount.handler";

interface GetCustomerInput {
    customerId: string;
}

export async function login(input: GetCustomerInput): Promise<Customer> {
    console.log(`login.login`);
    if (process.env.DEBUG) console.log(`Input: ${JSON.stringify(input, null, 2)}`);
    
    const customer: Customer = {
        id: input.customerId,
        discount: await getDiscount()
    };

    if (process.env.DEBUG) console.log(`Customer: ${JSON.stringify(customer, null, 2)}`);

    return customer;
}