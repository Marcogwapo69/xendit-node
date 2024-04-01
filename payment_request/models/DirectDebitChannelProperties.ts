/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { DirectDebitChannelPropertiesBankAccount } from './DirectDebitChannelPropertiesBankAccount';
import {
    DirectDebitChannelPropertiesBankAccountFromJSON,
    DirectDebitChannelPropertiesBankAccountFromJSONTyped,
    DirectDebitChannelPropertiesBankAccountToJSON,
} from './DirectDebitChannelPropertiesBankAccount';
import type { DirectDebitChannelPropertiesBankRedirect } from './DirectDebitChannelPropertiesBankRedirect';
import {
    DirectDebitChannelPropertiesBankRedirectFromJSON,
    DirectDebitChannelPropertiesBankRedirectFromJSONTyped,
    DirectDebitChannelPropertiesBankRedirectToJSON,
} from './DirectDebitChannelPropertiesBankRedirect';
import type { DirectDebitChannelPropertiesDebitCard } from './DirectDebitChannelPropertiesDebitCard';
import {
    DirectDebitChannelPropertiesDebitCardFromJSON,
    DirectDebitChannelPropertiesDebitCardFromJSONTyped,
    DirectDebitChannelPropertiesDebitCardToJSON,
} from './DirectDebitChannelPropertiesDebitCard';

/**
 * 
 * @export
 * @interface DirectDebitChannelProperties
 */
export interface DirectDebitChannelProperties {
    /**
     * Email address of the customer that is registered to the partner channel
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    email?: string;
    /**
     * Mobile number of the customer registered to the partner channel
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    mobileNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    successReturnUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    failureReturnUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    identityDocumentNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    accountNumber?: string;
    /**
     * Last four digits of the debit card
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    cardLastFour?: string;
    /**
     * Expiry month and year of the debit card (in MM/YY format)
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    cardExpiry?: string;
}

/**
 * Check if a given object implements the DirectDebitChannelProperties interface.
 */
export function instanceOfDirectDebitChannelProperties(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectDebitChannelPropertiesFromJSON(json: any): DirectDebitChannelProperties {
    return DirectDebitChannelPropertiesFromJSONTyped(json, false);
}

export function DirectDebitChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectDebitChannelProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'mobileNumber': !exists(json, 'mobile_number') ? undefined : json['mobile_number'],
        'successReturnUrl': !exists(json, 'success_return_url') ? undefined : json['success_return_url'],
        'failureReturnUrl': !exists(json, 'failure_return_url') ? undefined : json['failure_return_url'],
        'identityDocumentNumber': !exists(json, 'identity_document_number') ? undefined : json['identity_document_number'],
        'accountNumber': !exists(json, 'account_number') ? undefined : json['account_number'],
        'cardLastFour': !exists(json, 'card_last_four') ? undefined : json['card_last_four'],
        'cardExpiry': !exists(json, 'card_expiry') ? undefined : json['card_expiry'],
    };
}

export function DirectDebitChannelPropertiesToJSON(value?: DirectDebitChannelProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'mobile_number': value.mobileNumber,
        'success_return_url': value.successReturnUrl,
        'failure_return_url': value.failureReturnUrl,
        'identity_document_number': value.identityDocumentNumber,
        'account_number': value.accountNumber,
        'card_last_four': value.cardLastFour,
        'card_expiry': value.cardExpiry,
    };
}

