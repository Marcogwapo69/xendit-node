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
 * @interface RefundCallbackData
 */
export interface RefundCallbackData {
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    paymentId: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    invoiceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    paymentMethodType: string;
    /**
     * 
     * @type {number}
     * @memberof RefundCallbackData
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    channelCode: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    failureCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RefundCallbackData
     */
    refundFeeAmount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    created: string;
    /**
     * 
     * @type {string}
     * @memberof RefundCallbackData
     */
    updated: string;
    /**
     * 
     * @type {object}
     * @memberof RefundCallbackData
     */
    metadata?: object | null;
}

/**
 * Check if a given object implements the RefundCallbackData interface.
 */
export function instanceOfRefundCallbackData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "paymentId" in value;
    isInstance = isInstance && "paymentMethodType" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "reason" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;

    return isInstance;
}

export function RefundCallbackDataFromJSON(json: any): RefundCallbackData {
    return RefundCallbackDataFromJSONTyped(json, false);
}

export function RefundCallbackDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundCallbackData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'paymentId': json['payment_id'],
        'invoiceId': !exists(json, 'invoice_id') ? undefined : json['invoice_id'],
        'paymentMethodType': json['payment_method_type'],
        'amount': json['amount'],
        'channelCode': json['channel_code'],
        'status': json['status'],
        'reason': json['reason'],
        'country': json['country'],
        'currency': json['currency'],
        'referenceId': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'failureCode': !exists(json, 'failure_code') ? undefined : json['failure_code'],
        'refundFeeAmount': !exists(json, 'refund_fee_amount') ? undefined : json['refund_fee_amount'],
        'created': json['created'],
        'updated': json['updated'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RefundCallbackDataToJSON(value?: RefundCallbackData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'payment_id': value.paymentId,
        'invoice_id': value.invoiceId,
        'payment_method_type': value.paymentMethodType,
        'amount': value.amount,
        'channel_code': value.channelCode,
        'status': value.status,
        'reason': value.reason,
        'country': value.country,
        'currency': value.currency,
        'reference_id': value.referenceId,
        'failure_code': value.failureCode,
        'refund_fee_amount': value.refundFeeAmount,
        'created': value.created,
        'updated': value.updated,
        'metadata': value.metadata,
    };
}

