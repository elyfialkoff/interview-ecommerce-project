import { CUSTOMERS } from "../data/customer.data";
import { Customer } from "../interface/customer.interface";
import { NEXT_DISCOUNT } from "./set-discount.handler";

export let LOGIN_COUNT: number = 0;

interface GetCustomerInput {
    customerId: string;
}

export async function login(input: GetCustomerInput): Promise<Customer> {
    LOGIN_COUNT += 1;
    console.log(`Login Count: ${LOGIN_COUNT}`);

    const customer: Customer = {
        id: input.customerId
    };

    if (LOGIN_COUNT % NEXT_DISCOUNT.numberOfLogins === 0) {
        console.log(`Issuing a discount to ${input.customerId}.`)
        customer['discount'] = {
            isActive: true,
            code: NEXT_DISCOUNT.discountCode
        };
    };
    console.log(`Storing ${JSON.stringify(customer, null, 2)}.`)
    CUSTOMERS.set(input.customerId, customer)
    
    return CUSTOMERS.get(input.customerId)!;
}