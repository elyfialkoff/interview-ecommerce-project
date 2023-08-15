import { TRANSACTIONS } from "../data/transaction.data";
import { Transaction } from "../interface/transaction.interface";
import { Message } from "../interface/message.interface";
import { DISCOUNT } from "./discount.handler";

interface TransactionInput {
    customerId: string;
    items: string[];
    discountCode?: string;
};

export async function createTransaction(input: TransactionInput): Promise<Message> {
    console.log(`transaction.createTransaction`);
    if (process.env.DEBUG) console.log(`Input: ${JSON.stringify(input, null, 2)}`);

    // Validate and Use Discount:
    let discountUsed = false
    if (DISCOUNT.isActive && DISCOUNT.discountCode === input.discountCode) {
        if (process.env.DEBUG) console.log(`Using Discount`);
        discountUsed = true;
    }

    // Make Transaction:
    const transaction: Transaction = {
        items: input.items,
        discountUsed: discountUsed
    }
    TRANSACTIONS.push(transaction)
    if (process.env.DEBUG) console.log(`Transaction: ${JSON.stringify(transaction, null, 2)}`);

    // Update Discount:
    if (DISCOUNT.nthTransaction && TRANSACTIONS.length % DISCOUNT.nthTransaction === 0) {
        DISCOUNT.isActive = true;
        if (process.env.DEBUG) console.log(`Activating Discount: ${JSON.stringify(DISCOUNT, null, 2)}`);
    }
    
    if (discountUsed) {
        DISCOUNT.isActive = false;
        if (process.env.DEBUG) console.log(`Resetting Discount: ${JSON.stringify(DISCOUNT, null, 2)}`);
    }

    let message = `Transaction complete ${discountUsed ? `with a discount code.` : `without any discounts codes.`}` ;

    return {
        message: message
    };
}