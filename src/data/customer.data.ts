import { Customer } from "../interface/customer.interface";

export const CUSTOMERS: Map<string, Customer> = new Map<string, Customer>();

export function getCustomer(customerId: string): Customer {
    if (CUSTOMERS.has(customerId) ) {
        return CUSTOMERS.get(customerId)!;
    } else {
        throw new Error(`${customerId} not logged in yet, please login and try again.`)
    }
}