/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PaymentRequestCurrency } from './PaymentRequestCurrency';
import {
    PaymentRequestCurrencyFromJSON,
    PaymentRequestCurrencyFromJSONTyped,
    PaymentRequestCurrencyToJSON,
} from './PaymentRequestCurrency';
import type { VirtualAccountAlternativeDisplay } from './VirtualAccountAlternativeDisplay';
import {
    VirtualAccountAlternativeDisplayFromJSON,
    VirtualAccountAlternativeDisplayFromJSONTyped,
    VirtualAccountAlternativeDisplayToJSON,
} from './VirtualAccountAlternativeDisplay';
import type { VirtualAccountChannelCode } from './VirtualAccountChannelCode';
import {
    VirtualAccountChannelCodeFromJSON,
    VirtualAccountChannelCodeFromJSONTyped,
    VirtualAccountChannelCodeToJSON,
} from './VirtualAccountChannelCode';
import type { VirtualAccountChannelProperties } from './VirtualAccountChannelProperties';
import {
    VirtualAccountChannelPropertiesFromJSON,
    VirtualAccountChannelPropertiesFromJSONTyped,
    VirtualAccountChannelPropertiesToJSON,
} from './VirtualAccountChannelProperties';

/**
 * Virtual Account Payment Method Details
 * @export
 * @interface VirtualAccount
 */
export interface VirtualAccount {
    /**
     * 
     * @type {number}
     * @memberof VirtualAccount
     */
    minAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VirtualAccount
     */
    maxAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VirtualAccount
     */
    amount?: number | null;
    /**
     * 
     * @type {PaymentRequestCurrency}
     * @memberof VirtualAccount
     */
    currency?: PaymentRequestCurrency;
    /**
     * 
     * @type {VirtualAccountChannelCode}
     * @memberof VirtualAccount
     */
    channelCode: VirtualAccountChannelCode;
    /**
     * 
     * @type {VirtualAccountChannelProperties}
     * @memberof VirtualAccount
     */
    channelProperties: VirtualAccountChannelProperties;
    /**
     * Alternative display requested for the virtual account
     * @type {Array<string>}
     * @memberof VirtualAccount
     */
    alternativeDisplayTypes?: Array<VirtualAccountAlternativeDisplayTypesEnum>;
    /**
     * 
     * @type {Array<VirtualAccountAlternativeDisplay>}
     * @memberof VirtualAccount
     */
    alternativeDisplays?: Array<VirtualAccountAlternativeDisplay>;
}


/**
 * @export
 */
export const VirtualAccountAlternativeDisplayTypesEnum = {
    QrString: 'QR_STRING'
} as const;
export type VirtualAccountAlternativeDisplayTypesEnum = typeof VirtualAccountAlternativeDisplayTypesEnum[keyof typeof VirtualAccountAlternativeDisplayTypesEnum];


/**
 * Check if a given object implements the VirtualAccount interface.
 */
export function instanceOfVirtualAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "channelProperties" in value;

    return isInstance;
}

export function VirtualAccountFromJSON(json: any): VirtualAccount {
    return VirtualAccountFromJSONTyped(json, false);
}

export function VirtualAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minAmount': !exists(json, 'min_amount') ? undefined : json['min_amount'],
        'maxAmount': !exists(json, 'max_amount') ? undefined : json['max_amount'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currency': !exists(json, 'currency') ? undefined : PaymentRequestCurrencyFromJSON(json['currency']),
        'channelCode': VirtualAccountChannelCodeFromJSON(json['channel_code']),
        'channelProperties': VirtualAccountChannelPropertiesFromJSON(json['channel_properties']),
        'alternativeDisplayTypes': !exists(json, 'alternative_display_types') ? undefined : json['alternative_display_types'],
        'alternativeDisplays': !exists(json, 'alternative_displays') ? undefined : ((json['alternative_displays'] as Array<any>).map(VirtualAccountAlternativeDisplayFromJSON)),
    };
}

export function VirtualAccountToJSON(value?: VirtualAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'min_amount': value.minAmount,
        'max_amount': value.maxAmount,
        'amount': value.amount,
        'currency': PaymentRequestCurrencyToJSON(value.currency),
        'channel_code': VirtualAccountChannelCodeToJSON(value.channelCode),
        'channel_properties': VirtualAccountChannelPropertiesToJSON(value.channelProperties),
        'alternative_display_types': value.alternativeDisplayTypes,
        'alternative_displays': value.alternativeDisplays === undefined ? undefined : ((value.alternativeDisplays as Array<any>).map(VirtualAccountAlternativeDisplayToJSON)),
    };
}
