import { Discount } from "../interface/discount.interface";
import { Message } from "../interface/message.interface";

export let DISCOUNT: Discount;

interface SetDiscountInput {
    nthTransaction: number;
    discountCode: string;
};

export async function setDiscount(input: SetDiscountInput): Promise<Message> {
    console.log(`Setting discount with input values: ${JSON.stringify(input, null, 2)}`);
    DISCOUNT = {
        nthTransaction: input.nthTransaction,
        isActive: false,
        discountCode: input.discountCode
    };
    console.log(`Creating discount: ${JSON.stringify(DISCOUNT, null, 2)}`);

    return {
        message: 'Discount successfully set'
    }
}

export async function getDiscount(): Promise<Discount> {
    return DISCOUNT;
}