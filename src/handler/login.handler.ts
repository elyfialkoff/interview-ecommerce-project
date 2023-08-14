import { Customer } from "../interface/customer.interface";
import { getDiscount } from "./discount.handler";

interface GetCustomerInput {
    customerId: string;
}

export async function login(input: GetCustomerInput): Promise<Customer> {
    const customer: Customer = {
        id: input.customerId,
        discount: await getDiscount()
    };

    return customer;
}