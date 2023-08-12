interface GetCustomerInput {
    customerId: string;
}
export async function getCustomer(input: GetCustomerInput): Promise<any> {
    // If not in CUSTOMER then add
    // If in CUSTOMER then return data
}