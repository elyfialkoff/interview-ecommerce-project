import { TRANSACTIONS, TRANSACTIONS_WITH_DISCOUNT, Transaction } from "../data/transaction.data";
import { CUSTOMERS, getCustomer } from "../data/customer.data";
import { Customer } from "../interface/customer.interface";

interface TransactionInput {
    customerId: string;
    items: string[];
    discountCode?: string;
};

export async function transaction(input: TransactionInput): Promise<any> {
    // Get Customer and validate discount code
    const customer: Customer = getCustomer(input.customerId);
    if (input.discountCode && customer.discountCode != input.discountCode) {
        throw new Error(`Discount code is not valid.`);
    };

    // Add the transaction record to the database
    const transaction: Transaction = {
        items: input.items,
        discountUsed: input.discountCode ? true : false
    }
    TRANSACTIONS.push(transaction)

    if (input.discountCode) {
        // For reporting, add transaction record, with discount used, to database
        TRANSACTIONS_WITH_DISCOUNT.push(transaction);
        
        // Remove discount code from customer record
        CUSTOMERS.set(input.customerId, {
            id: input.customerId,
            hasDiscount: false 
        })
    }

    return {
        message: `Transaction complete.`
    };
}