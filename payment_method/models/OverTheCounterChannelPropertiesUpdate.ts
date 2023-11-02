/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * Over The Counter Channel properties that can be updated
 * @export
 * @interface OverTheCounterChannelPropertiesUpdate
 */
export interface OverTheCounterChannelPropertiesUpdate {
    /**
     * Name of customer.
     * @type {string}
     * @memberof OverTheCounterChannelPropertiesUpdate
     */
    customerName?: string;
    /**
     * The time when the payment code will be expired. The minimum is 2 hours and the maximum is 9 days for 7ELEVEN. Default expired date will be 2 days from payment code generated.
     * @type {Date}
     * @memberof OverTheCounterChannelPropertiesUpdate
     */
    expiresAt?: Date;
}

/**
 * Check if a given object implements the OverTheCounterChannelPropertiesUpdate interface.
 */
export function instanceOfOverTheCounterChannelPropertiesUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OverTheCounterChannelPropertiesUpdateFromJSON(json: any): OverTheCounterChannelPropertiesUpdate {
    return OverTheCounterChannelPropertiesUpdateFromJSONTyped(json, false);
}

export function OverTheCounterChannelPropertiesUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverTheCounterChannelPropertiesUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
    };
}

export function OverTheCounterChannelPropertiesUpdateToJSON(value?: OverTheCounterChannelPropertiesUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_name': value.customerName,
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
    };
}
