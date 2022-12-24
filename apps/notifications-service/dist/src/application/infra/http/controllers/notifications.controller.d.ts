import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notifications-body';
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        };
    }>;
}
