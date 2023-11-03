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
 * @interface CaptureParameters
 */
export interface CaptureParameters {
    /**
     * 
     * @type {string}
     * @memberof CaptureParameters
     */
    referenceId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CaptureParameters
     */
    captureAmount: number;
}

/**
 * Check if a given object implements the CaptureParameters interface.
 */
export function instanceOfCaptureParameters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "captureAmount" in value;

    return isInstance;
}

export function CaptureParametersFromJSON(json: any): CaptureParameters {
    return CaptureParametersFromJSONTyped(json, false);
}

export function CaptureParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaptureParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceId': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'captureAmount': json['capture_amount'],
    };
}

export function CaptureParametersToJSON(value?: CaptureParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reference_id': value.referenceId,
        'capture_amount': value.captureAmount,
    };
}

