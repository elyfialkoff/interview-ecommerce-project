import { CUSTOMERS } from "../data/customer.data";
import { TRANSACTIONS } from "../data/transaction.data";
import { Customer } from "../interface/customer.interface";
import { Report } from "../interface/report.interface"
import { Transaction } from "../interface/transaction.interface";

export async function getReport(): Promise<Report> {
    const transactionCount: number = TRANSACTIONS.length;
    
    let currentCustomersWithDiscounts: number = 0
    CUSTOMERS.forEach((value: Customer, key: string) => {
        if (value.discount) {
            currentCustomersWithDiscounts += 1;
        };
    });

    const transactionCountWithDiscounts: number = TRANSACTIONS.filter((transaction: Transaction) => transaction.discountUsed).length;
    const discountCount: number = currentCustomersWithDiscounts + transactionCountWithDiscounts;

    const report: Report = {
        numberOfTransactions: transactionCount,
        numberOfDiscountsGiven: discountCount
    }

    return report;
}