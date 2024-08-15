/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PaymentMethod } from './PaymentMethod';
import {
    PaymentMethodFromJSON,
    PaymentMethodFromJSONTyped,
    PaymentMethodToJSON,
} from './PaymentMethod';

/**
 * Callback for active or expired E-Wallet or Direct Debit account linking, Virtual Accounts or QR strings
 * @export
 * @interface PaymentMethodCallback
 */
export interface PaymentMethodCallback {
    /**
     * Identifies the event that triggered a notification to the merchant
     * @type {string}
     * @memberof PaymentMethodCallback
     */
    event: string;
    /**
     * business_id
     * @type {string}
     * @memberof PaymentMethodCallback
     */
    businessId: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCallback
     */
    created: string;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof PaymentMethodCallback
     */
    data?: PaymentMethod;
}

/**
 * Check if a given object implements the PaymentMethodCallback interface.
 */
export function instanceOfPaymentMethodCallback(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "event" in value;
    isInstance = isInstance && "businessId" in value;
    isInstance = isInstance && "created" in value;

    return isInstance;
}

export function PaymentMethodCallbackFromJSON(json: any): PaymentMethodCallback {
    return PaymentMethodCallbackFromJSONTyped(json, false);
}

export function PaymentMethodCallbackFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodCallback {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'event': json['event'],
        'businessId': json['business_id'],
        'created': json['created'],
        'data': !exists(json, 'data') ? undefined : PaymentMethodFromJSON(json['data']),
    };
}

export function PaymentMethodCallbackToJSON(value?: PaymentMethodCallback | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event': value.event,
        'business_id': value.businessId,
        'created': value.created,
        'data': PaymentMethodToJSON(value.data),
    };
}
