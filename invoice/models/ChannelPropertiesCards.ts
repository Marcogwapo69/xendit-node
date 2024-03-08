/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * An object representing properties specific for credit card payment method.
 * @export
 * @interface ChannelPropertiesCards
 */
export interface ChannelPropertiesCards {
    /**
     * An array of allowed BINs (6 or 8 digits) for credit card payments.
     * @type {Array<string>}
     * @memberof ChannelPropertiesCards
     */
    allowedBins?: Array<string>;
}

/**
 * Check if a given object implements the ChannelPropertiesCards interface.
 */
export function instanceOfChannelPropertiesCards(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelPropertiesCardsFromJSON(json: any): ChannelPropertiesCards {
    return ChannelPropertiesCardsFromJSONTyped(json, false);
}

export function ChannelPropertiesCardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPropertiesCards {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedBins': !exists(json, 'allowed_bins') ? undefined : json['allowed_bins'],
    };
}

export function ChannelPropertiesCardsToJSON(value?: ChannelPropertiesCards | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowed_bins': value.allowedBins,
    };
}

