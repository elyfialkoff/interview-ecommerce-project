interface GetDiscountInput {
    customerId: string;
};

export async function setDiscount(input: GetDiscountInput): Promise<any> {
    // look up input.customerId in CUSTOMER
}