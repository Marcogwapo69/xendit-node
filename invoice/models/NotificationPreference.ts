/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { NotificationChannel } from './NotificationChannel';
import {
    NotificationChannelFromJSON,
    NotificationChannelFromJSONTyped,
    NotificationChannelToJSON,
} from './NotificationChannel';

/**
 * An object representing notification preferences for different invoice events.
 * @export
 * @interface NotificationPreference
 */
export interface NotificationPreference {
    /**
     * Notification channels for when an invoice is created.
     * @type {Array<NotificationChannel>}
     * @memberof NotificationPreference
     */
    invoiceCreated?: Array<NotificationChannel>;
    /**
     * Notification channels for invoice reminders.
     * @type {Array<NotificationChannel>}
     * @memberof NotificationPreference
     */
    invoiceReminder?: Array<NotificationChannel>;
    /**
     * Notification channels for when an invoice is paid.
     * @type {Array<NotificationChannel>}
     * @memberof NotificationPreference
     */
    invoicePaid?: Array<NotificationChannel>;
}

/**
 * Check if a given object implements the NotificationPreference interface.
 */
export function instanceOfNotificationPreference(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NotificationPreferenceFromJSON(json: any): NotificationPreference {
    return NotificationPreferenceFromJSONTyped(json, false);
}

export function NotificationPreferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationPreference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceCreated': !exists(json, 'invoice_created') ? undefined : ((json['invoice_created'] as Array<any>).map(NotificationChannelFromJSON)),
        'invoiceReminder': !exists(json, 'invoice_reminder') ? undefined : ((json['invoice_reminder'] as Array<any>).map(NotificationChannelFromJSON)),
        'invoicePaid': !exists(json, 'invoice_paid') ? undefined : ((json['invoice_paid'] as Array<any>).map(NotificationChannelFromJSON)),
    };
}

export function NotificationPreferenceToJSON(value?: NotificationPreference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoice_created': value.invoiceCreated === undefined ? undefined : ((value.invoiceCreated as Array<any>).map(NotificationChannelToJSON)),
        'invoice_reminder': value.invoiceReminder === undefined ? undefined : ((value.invoiceReminder as Array<any>).map(NotificationChannelToJSON)),
        'invoice_paid': value.invoicePaid === undefined ? undefined : ((value.invoicePaid as Array<any>).map(NotificationChannelToJSON)),
    };
}

