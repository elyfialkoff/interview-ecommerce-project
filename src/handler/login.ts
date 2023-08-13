import { CUSTOMERS } from "../data/customer.data";
import { Customer } from "../interface/customer.interface";

interface GetCustomerInput {
    customerId: string;
}
export async function login(input: GetCustomerInput): Promise<Customer> {
    // TODO: Might want to update when a discountCode is generated on login and not on  transactions
    
    // Add Customer record to database if this is the first time the customer is logging in
    if (!CUSTOMERS.has(input.customerId)) {
        CUSTOMERS.set(input.customerId, {
            id: input.customerId,
            hasDiscount: false,
        });
    }

    return CUSTOMERS.get(input.customerId)!;
}