interface GetDiscountInput {
    customerId: string;
};

export async function getDiscount(input: GetDiscountInput): Promise<any> {
    // look up input.customerId in CUSTOMER
}