export interface Transaction {
    items: string[];
    discountUsed: boolean
}

export const TRANSACTIONS: Transaction[] = []
export const TRANSACTIONS_WITH_DISCOUNT: Transaction[] = []