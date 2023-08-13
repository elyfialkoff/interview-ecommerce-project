import { CUSTOMERS } from "../data/customer.data";
import { Customer } from "../interface/customer.interface";

interface GetCustomerInput {
    customerId: string;
}
export async function getCustomer(input: GetCustomerInput): Promise<Customer> {
    // First time Customer is logging in? Add to CUSTOMERS
    if (!CUSTOMERS.has(input.customerId)) {
        CUSTOMERS.set(input.customerId, {
            id: input.customerId,
            hasDiscount: false,
        });
    }

    return CUSTOMERS.get(input.customerId)!;
}