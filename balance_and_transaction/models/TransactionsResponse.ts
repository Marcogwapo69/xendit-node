/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { LinkItem } from './LinkItem';
import {
    LinkItemFromJSON,
    LinkItemFromJSONTyped,
    LinkItemToJSON,
} from './LinkItem';
import type { TransactionResponse } from './TransactionResponse';
import {
    TransactionResponseFromJSON,
    TransactionResponseFromJSONTyped,
    TransactionResponseToJSON,
} from './TransactionResponse';

/**
 * Returns an array of Transaction Objects. Returns empty array when there is no result.
 * @export
 * @interface TransactionsResponse
 */
export interface TransactionsResponse {
    /**
     * Indicates whether there are more items to be queried with `after_id` of the last item from the current result. Use the `links` to follow to the next result.
     * @type {boolean}
     * @memberof TransactionsResponse
     */
    hasMore: boolean;
    /**
     * The links to the next page based on LinkItem if there is next result.
     * @type {Array<LinkItem>}
     * @memberof TransactionsResponse
     */
    links?: Array<LinkItem>;
    /**
     * 
     * @type {Array<TransactionResponse>}
     * @memberof TransactionsResponse
     */
    data: Array<TransactionResponse>;
}

/**
 * Check if a given object implements the TransactionsResponse interface.
 */
export function instanceOfTransactionsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hasMore" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TransactionsResponseFromJSON(json: any): TransactionsResponse {
    return TransactionsResponseFromJSONTyped(json, false);
}

export function TransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasMore': json['has_more'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(LinkItemFromJSON)),
        'data': ((json['data'] as Array<any>).map(TransactionResponseFromJSON)),
    };
}

export function TransactionsResponseToJSON(value?: TransactionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'has_more': value.hasMore,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(LinkItemToJSON)),
        'data': ((value.data as Array<any>).map(TransactionResponseToJSON)),
    };
}

