/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * 
 * @export
 */
export const PaymentRequestInitiator = {
    Customer: 'CUSTOMER',
    Merchant: 'MERCHANT',
    XenditEnumDefaultFallback: "UNKNOWN_ENUM_VALUE"
} as const;
export type PaymentRequestInitiator = typeof PaymentRequestInitiator[keyof typeof PaymentRequestInitiator];


export function PaymentRequestInitiatorFromJSON(json: any): PaymentRequestInitiator {
    return PaymentRequestInitiatorFromJSONTyped(json, false);
}

export function PaymentRequestInitiatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestInitiator {
    if (json !== "" || json !== null) {
        const key = Object.keys(PaymentRequestInitiator)[Object.values(PaymentRequestInitiator).indexOf(json)]
        return PaymentRequestInitiator[key] === undefined ?
            PaymentRequestInitiator['XenditEnumDefaultFallback'] : PaymentRequestInitiator[key]
    }
    return json as PaymentRequestInitiator;
}

export function PaymentRequestInitiatorToJSON(value?: PaymentRequestInitiator | null): any {
    return value as any;
}
