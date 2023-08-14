import { TRANSACTIONS } from "../data/transaction.data";
import { Report } from "../interface/report.interface";
import { Transaction } from "../interface/transaction.interface";

export async function getReport(): Promise<Report> {
    const transactionCount: number = TRANSACTIONS.length;
    const discountCount: number = TRANSACTIONS.filter((transaction: Transaction) => transaction.discountUsed).length;

    const report: Report = {
        transactionCount: transactionCount,
        transactionWithDiscountCount: discountCount
    }

    return report;
}