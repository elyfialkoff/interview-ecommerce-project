import { Discount } from './discount.interface';

export interface Customer {
    id: string;
    discount?: Discount
}