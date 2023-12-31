import { Discount } from "../interface/discount.interface";
import { Message } from "../interface/message.interface";

export let DISCOUNT: Discount;

interface SetDiscountInput {
    nthTransaction: number;
    discountCode: string;
};

export async function setDiscount(input: SetDiscountInput): Promise<Message> {
    console.log(`discount.setDiscount`);
    if (process.env.DEBUG) console.log(`Input: ${JSON.stringify(input, null, 2)}`);
    DISCOUNT = {
        nthTransaction: input.nthTransaction,
        isActive: false,
        discountCode: input.discountCode
    };
    if (process.env.DEBUG) console.log(`DISCOUNT: ${JSON.stringify(DISCOUNT, null, 2)}`);

    return {
        message: 'Discount successfully set'
    }
}

export async function getDiscount(): Promise<Discount> {
    console.log(`discount.getDiscount`);

    const discount: Discount = {
        isActive: DISCOUNT.isActive
    };

    if (DISCOUNT.isActive) {
        discount.discountCode = DISCOUNT.discountCode
    };

    if (process.env.DEBUG) console.log(`DISCOUNT: ${JSON.stringify(DISCOUNT, null, 2)}`);

    return discount;
}