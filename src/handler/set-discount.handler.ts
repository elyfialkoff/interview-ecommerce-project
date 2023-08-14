export interface NextDiscount {
    numberOfLogins: number;
    discountCode: string;
}

export let NEXT_DISCOUNT: NextDiscount;

interface SetDiscountInput {
    numberOfLogins: number;
    discountCode: string;
};

export async function setDiscount(input: SetDiscountInput): Promise<any> {
    console.log(`Setting discount with input values: ${JSON.stringify(input, null, 2)}`);
    NEXT_DISCOUNT = {
        numberOfLogins: input.numberOfLogins,
        discountCode: input.discountCode
    };
    console.log(`Creating discount: ${JSON.stringify(NEXT_DISCOUNT, null, 2)}`);

    return {
        message: 'Discount successfully set'
    }
}