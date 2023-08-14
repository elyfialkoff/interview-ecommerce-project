export interface Discount {
    nthTransaction: number;
    discountCode: string;
}

export let DISCOUNT: Discount;

interface SetDiscountInput {
    nthTransaction: number;
    discountCode: string;
};

export async function setDiscount(input: SetDiscountInput): Promise<any> {
    console.log(`Setting discount with input values: ${JSON.stringify(input, null, 2)}`);
    DISCOUNT = input;
    console.log(`Creating discount: ${JSON.stringify(DISCOUNT, null, 2)}`);

    return {
        message: 'Discount successfully set'
    }
}