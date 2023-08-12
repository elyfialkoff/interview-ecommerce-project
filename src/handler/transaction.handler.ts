interface TransactionInput {
    customerId: string;
    items: string[];
    discountCode?: string;
};

export async function transaction(input: TransactionInput): Promise<any> {
    // If discountCode, then remove it from the customer who used it from CUSTOMERE
    // If not included look up discountCode in CUSTOMERS  (auto use discounts)
    // If not included and none in CUSTOMERS then no discount is applied

    return {
        isDiscount: false,
        discountCode: ''
    };
}