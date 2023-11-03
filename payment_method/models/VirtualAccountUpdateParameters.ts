/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { VirtualAccountChannelPropertiesPatch } from './VirtualAccountChannelPropertiesPatch';
import {
    VirtualAccountChannelPropertiesPatchFromJSON,
    VirtualAccountChannelPropertiesPatchFromJSONTyped,
    VirtualAccountChannelPropertiesPatchToJSON,
} from './VirtualAccountChannelPropertiesPatch';

/**
 * 
 * @export
 * @interface VirtualAccountUpdateParameters
 */
export interface VirtualAccountUpdateParameters {
    /**
     * 
     * @type {number}
     * @memberof VirtualAccountUpdateParameters
     */
    amount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VirtualAccountUpdateParameters
     */
    minAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VirtualAccountUpdateParameters
     */
    maxAmount?: number | null;
    /**
     * 
     * @type {VirtualAccountChannelPropertiesPatch}
     * @memberof VirtualAccountUpdateParameters
     */
    channelProperties?: VirtualAccountChannelPropertiesPatch;
    /**
     * For payments in Vietnam only, alternative display requested for the virtual account
     * @type {Array<string>}
     * @memberof VirtualAccountUpdateParameters
     */
    alternativeDisplayTypes?: Array<VirtualAccountUpdateParametersAlternativeDisplayTypesEnum>;
}


/**
 * @export
 */
export const VirtualAccountUpdateParametersAlternativeDisplayTypesEnum = {
    QrString: 'QR_STRING'
} as const;
export type VirtualAccountUpdateParametersAlternativeDisplayTypesEnum = typeof VirtualAccountUpdateParametersAlternativeDisplayTypesEnum[keyof typeof VirtualAccountUpdateParametersAlternativeDisplayTypesEnum];


/**
 * Check if a given object implements the VirtualAccountUpdateParameters interface.
 */
export function instanceOfVirtualAccountUpdateParameters(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VirtualAccountUpdateParametersFromJSON(json: any): VirtualAccountUpdateParameters {
    return VirtualAccountUpdateParametersFromJSONTyped(json, false);
}

export function VirtualAccountUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualAccountUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'minAmount': !exists(json, 'min_amount') ? undefined : json['min_amount'],
        'maxAmount': !exists(json, 'max_amount') ? undefined : json['max_amount'],
        'channelProperties': !exists(json, 'channel_properties') ? undefined : VirtualAccountChannelPropertiesPatchFromJSON(json['channel_properties']),
        'alternativeDisplayTypes': !exists(json, 'alternative_display_types') ? undefined : json['alternative_display_types'],
    };
}

export function VirtualAccountUpdateParametersToJSON(value?: VirtualAccountUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'min_amount': value.minAmount,
        'max_amount': value.maxAmount,
        'channel_properties': VirtualAccountChannelPropertiesPatchToJSON(value.channelProperties),
        'alternative_display_types': value.alternativeDisplayTypes,
    };
}

