import { CUSTOMERS } from "../data/customer.data";
import { Customer } from "../interface/customer.interface";
import { NEXT_DISCOUNT } from "./set-discount.handler";

export let LOGIN_COUNT: number = 0;

interface GetCustomerInput {
    customerId: string;
}

export async function login(input: GetCustomerInput): Promise<Customer> {
    // Increase the login count
    LOGIN_COUNT += 1;

    const customer: Customer = {
        id: input.customerId
    };

    if (LOGIN_COUNT % NEXT_DISCOUNT.numberOfLogins === 0) {
        customer['discount'] = {
            code: NEXT_DISCOUNT.discountCode
        };
    };
    CUSTOMERS.set(input.customerId, customer)
    
    return CUSTOMERS.get(input.customerId)!;
}