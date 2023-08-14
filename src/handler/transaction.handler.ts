import { TRANSACTIONS } from "../data/transaction.data";
import { Transaction } from "../interface/transaction.interface";
import { Message } from "../interface/message.interface";
import { DISCOUNT } from "./discount.handler";

interface TransactionInput {
    customerId: string;
    items: string[];
    discountCode?: string;
};

export async function transaction(input: TransactionInput): Promise<Message> {
    // Validate and Use Discount:
    let discountUsed = false
    if (DISCOUNT.isActive && DISCOUNT.discountCode === input.discountCode) {
        discountUsed = true;
    }

    // Make Transaction:
    const transaction: Transaction = {
        items: input.items,
        discountUsed: discountUsed
    }
    TRANSACTIONS.push(transaction)

    // Update Discount:
    if (DISCOUNT.nthTransaction && TRANSACTIONS.length % DISCOUNT.nthTransaction === 0) {
        DISCOUNT.isActive = true;
    }

    let message = `Transaction complete ${discountUsed ? `with a discount code.` : `with not discounts applied.`}` ;

    return {
        message: message
    };
}