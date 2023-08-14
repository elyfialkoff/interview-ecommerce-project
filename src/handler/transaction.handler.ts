import { TRANSACTIONS } from "../data/transaction.data";
import { CUSTOMERS, getCustomer } from "../data/customer.data";
import { Customer } from "../interface/customer.interface";
import { Transaction } from "../interface/transaction.interface";

interface TransactionInput {
    customerId: string;
    items: string[];
    discountCode?: string;
};

export async function transaction(input: TransactionInput): Promise<any> {
    // Get Customer and validate discount code
    const customer: Customer = getCustomer(input.customerId);
    if (input.discountCode && customer.discount && customer.discount.code != input.discountCode) {
        throw new Error(`Discount code is not valid.`);
    };

    // Add the transaction record to the database
    const transaction: Transaction = {
        items: input.items,
        discountUsed: input.discountCode ? true : false
    }
    TRANSACTIONS.push(transaction)

    if (input.discountCode) {
        // Remove discount code from customer record
        CUSTOMERS.set(input.customerId, {
            id: input.customerId,
        })
    }

    return {
        message: `Transaction complete.`
    };
}