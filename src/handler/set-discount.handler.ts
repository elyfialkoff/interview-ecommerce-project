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
    NEXT_DISCOUNT = {
        numberOfLogins: input.numberOfLogins,
        discountCode: input.discountCode
    };

    return {
        message: 'Discount successfully set'
    }
}