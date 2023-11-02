/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface PaymentRequestCardVerificationResultsThreeDeeSecure
 */
export interface PaymentRequestCardVerificationResultsThreeDeeSecure {
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestCardVerificationResultsThreeDeeSecure
     */
    threeDSecureFlow?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestCardVerificationResultsThreeDeeSecure
     */
    eciCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestCardVerificationResultsThreeDeeSecure
     */
    threeDSecureResult?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestCardVerificationResultsThreeDeeSecure
     */
    threeDSecureResultReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestCardVerificationResultsThreeDeeSecure
     */
    threeDSecureVersion?: string;
}

/**
 * Check if a given object implements the PaymentRequestCardVerificationResultsThreeDeeSecure interface.
 */
export function instanceOfPaymentRequestCardVerificationResultsThreeDeeSecure(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentRequestCardVerificationResultsThreeDeeSecureFromJSON(json: any): PaymentRequestCardVerificationResultsThreeDeeSecure {
    return PaymentRequestCardVerificationResultsThreeDeeSecureFromJSONTyped(json, false);
}

export function PaymentRequestCardVerificationResultsThreeDeeSecureFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestCardVerificationResultsThreeDeeSecure {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'threeDSecureFlow': !exists(json, 'three_d_secure_flow') ? undefined : json['three_d_secure_flow'],
        'eciCode': !exists(json, 'eci_code') ? undefined : json['eci_code'],
        'threeDSecureResult': !exists(json, 'three_d_secure_result') ? undefined : json['three_d_secure_result'],
        'threeDSecureResultReason': !exists(json, 'three_d_secure_result_reason') ? undefined : json['three_d_secure_result_reason'],
        'threeDSecureVersion': !exists(json, 'three_d_secure_version') ? undefined : json['three_d_secure_version'],
    };
}

export function PaymentRequestCardVerificationResultsThreeDeeSecureToJSON(value?: PaymentRequestCardVerificationResultsThreeDeeSecure | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'three_d_secure_flow': value.threeDSecureFlow,
        'eci_code': value.eciCode,
        'three_d_secure_result': value.threeDSecureResult,
        'three_d_secure_result_reason': value.threeDSecureResultReason,
        'three_d_secure_version': value.threeDSecureVersion,
    };
}
