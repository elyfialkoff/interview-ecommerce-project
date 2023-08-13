import { getCustomer } from "../data/customer.data";
import { Customer } from "../interface/customer.interface";
import { Discount } from "../interface/discount.interface";

interface GetDiscountInput {
    customerId: string
}

export async function getDiscount(input: GetDiscountInput): Promise<Discount> {
    const customer: Customer = getCustomer(input.customerId);
    
    const discount: Discount = {
        isDiscount: customer.hasDiscount,
        discountCode: customer.discountCode ?? ""
    };
    return discount;
}